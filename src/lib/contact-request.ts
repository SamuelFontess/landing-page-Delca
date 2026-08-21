import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

function getAllowedHostnames(): Set<string> {
  const hostnames = new Set([new URL(SITE_URL).hostname]);

  if (process.env.NODE_ENV === "development") {
    hostnames.add("localhost");
    hostnames.add("127.0.0.1");
  }

  if (process.env.VERCEL_URL) {
    hostnames.add(process.env.VERCEL_URL);
  }

  const extra = process.env.CONTACT_ALLOWED_HOSTS?.split(",").map((h) => h.trim());
  extra?.forEach((host) => {
    if (host) hostnames.add(host);
  });

  return hostnames;
}

function hostnameFromHeader(value: string | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).hostname;
  } catch {
    return null;
  }
}

export function isTrustedContactRequest(request: NextRequest): boolean {
  const allowed = getAllowedHostnames();
  const originHost = hostnameFromHeader(request.headers.get("origin"));
  const refererHost = hostnameFromHeader(request.headers.get("referer"));

  if (originHost && allowed.has(originHost)) return true;
  if (refererHost && allowed.has(refererHost)) return true;

  return false;
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function readLimitedJsonBody(
  request: NextRequest,
  maxBytes: number,
): Promise<
  | { ok: true; data: unknown }
  | { ok: false; status: 413 | 400 }
> {
  if (!request.body) {
    return { ok: false, status: 400 };
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let totalBytes = 0;
  let text = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    totalBytes += value.byteLength;
    if (totalBytes > maxBytes) {
      await reader.cancel();
      return { ok: false, status: 413 };
    }

    text += decoder.decode(value, { stream: true });
  }

  text += decoder.decode();

  if (!text.trim()) {
    return { ok: false, status: 400 };
  }

  try {
    return { ok: true, data: JSON.parse(text) };
  } catch {
    return { ok: false, status: 400 };
  }
}
