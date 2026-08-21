import { z } from "zod";
import { CONTACT_SUBJECTS } from "@/lib/contact";

export const contactSchema = z.object({
  name: z.string().trim().min(3, "O nome deve ter pelo menos 3 caracteres.").max(100),
  email: z.string().trim().email("Por favor, insira um e-mail válido.").max(254),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[\d\s()+-]+$/, "Telefone inválido.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "O telefone deve ter pelo menos 10 dígitos."),
  subject: z
    .union([z.enum(CONTACT_SUBJECTS), z.literal("")])
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  message: z
    .string()
    .trim()
    .min(15, "Sua mensagem deve ter pelo menos 15 caracteres.")
    .max(2000),
  _honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormInput = z.input<typeof contactSchema>;
