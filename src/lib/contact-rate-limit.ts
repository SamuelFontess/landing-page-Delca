import { CONTACT_RATE_LIMIT } from "@/lib/contact";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

export function isContactRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, {
      count: 1,
      resetAt: now + CONTACT_RATE_LIMIT.windowMs,
    });
    return false;
  }

  if (entry.count >= CONTACT_RATE_LIMIT.maxRequests) {
    return true;
  }

  entry.count += 1;
  return false;
}

export function contactRateLimitRetryAfterSeconds(key: string): number {
  const entry = store.get(key);
  if (!entry) return 60;
  return Math.max(1, Math.ceil((entry.resetAt - Date.now()) / 1000));
}
