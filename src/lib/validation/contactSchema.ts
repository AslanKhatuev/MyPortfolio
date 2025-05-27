import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Navnet må være minst 2 tegn"),
  email: z.string().email("Ugyldig e-postadresse"),
  message: z.string().min(10, "Meldingen må være minst 10 tegn"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
