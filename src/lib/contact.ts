export const CONTACT_SUBJECTS = [
  "Orçamento de materiais",
  "Consulta de estoque",
  "Informações sobre entrega",
  "Parceria comercial",
  "Outro",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export const MAX_CONTACT_BODY_BYTES = 8_192;

export const CONTACT_RATE_LIMIT = {
  windowMs: 60_000,
  maxRequests: 5,
} as const;

/** Remove caracteres perigosos em cabeçalhos de e-mail (CRLF injection). */
export function sanitizeEmailHeader(value: string, maxLength = 200): string {
  return value.replace(/[\r\n]/g, " ").trim().slice(0, maxLength);
}

export function buildContactEmailBody(data: {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}): string {
  return [
    "Nova mensagem recebida pelo site DELCA Construções.",
    "",
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.phone}`,
    data.subject ? `Assunto: ${data.subject}` : null,
    "",
    "Mensagem:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildContactEmailSubject(data: {
  name: string;
  subject?: string;
}): string {
  const name = sanitizeEmailHeader(data.name, 80);
  if (data.subject) {
    return sanitizeEmailHeader(`[Site] ${data.subject} — ${name}`, 200);
  }
  return sanitizeEmailHeader(`[Site] Contato — ${name}`, 200);
}
