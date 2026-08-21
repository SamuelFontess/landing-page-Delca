import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailBody,
  buildContactEmailSubject,
  MAX_CONTACT_BODY_BYTES,
  sanitizeEmailHeader,
} from "@/lib/contact";
import { isContactRateLimited, contactRateLimitRetryAfterSeconds } from "@/lib/contact-rate-limit";
import { contactSchema } from "@/lib/contact-schema";
import { getClientIp, isTrustedContactRequest, readLimitedJsonBody } from "@/lib/contact-request";

export const dynamic = "force-dynamic";

const JSON_HEADERS = { "Content-Type": "application/json" } as const;

function jsonResponse(body: Record<string, unknown>, status: number, extraHeaders?: HeadersInit) {
  return NextResponse.json(body, { status, headers: { ...JSON_HEADERS, ...extraHeaders } });
}

function successResponse() {
  return jsonResponse({ success: true }, 200);
}

function isHoneypotTriggered(body: unknown): boolean {
  if (typeof body !== "object" || body === null) return false;
  const value = (body as Record<string, unknown>)._honeypot;
  return typeof value === "string" && value.length > 0;
}

export async function POST(request: NextRequest) {
  if (!isTrustedContactRequest(request)) {
    return jsonResponse({ error: "Requisição não autorizada." }, 403);
  }

  const clientIp = getClientIp(request);
  if (isContactRateLimited(clientIp)) {
    return jsonResponse(
      { error: "Muitas tentativas. Aguarde um momento e tente novamente." },
      429,
      { "Retry-After": String(contactRateLimitRetryAfterSeconds(clientIp)) },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_CONTACT_BODY_BYTES) {
    return jsonResponse({ error: "Requisição muito grande." }, 413);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("[contact] Variáveis de ambiente de e-mail não configuradas.");
    return jsonResponse(
      { error: "Serviço de e-mail indisponível. Tente novamente mais tarde." },
      503,
    );
  }

  const bodyResult = await readLimitedJsonBody(request, MAX_CONTACT_BODY_BYTES);
  if (!bodyResult.ok) {
    return jsonResponse(
      { error: bodyResult.status === 413 ? "Requisição muito grande." : "Corpo da requisição inválido." },
      bodyResult.status,
    );
  }

  const json = bodyResult.data;

  if (isHoneypotTriggered(json)) {
    return successResponse();
  }

  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Dados inválidos.";
    return jsonResponse({ error: firstError }, 400);
  }

  const { name, email, phone, subject, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: sanitizeEmailHeader(email, 254),
      subject: buildContactEmailSubject({ name, subject }),
      text: buildContactEmailBody({ name, email, phone, subject, message }),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return jsonResponse(
        { error: "Não foi possível enviar a mensagem. Tente novamente." },
        502,
      );
    }

    return successResponse();
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return jsonResponse(
      { error: "Erro interno. Tente novamente mais tarde." },
      500,
    );
  }
}

export async function GET() {
  return jsonResponse({ error: "Método não permitido." }, 405, { Allow: "POST" });
}
