import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

function getAllowedHostnames(): Set<string> {
  const hostnames = new Set([
    new URL(SITE_URL).hostname,
    "localhost",
    "127.0.0.1",
  ]);

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
