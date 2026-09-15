import { z } from "zod";

export const prayerRequestSchema = z.object({
  name: z.string().min(1, "Please share your name").max(100),
  phone: z.string().min(7, "Please share a phone number we can reach you on").max(20),
  request: z.string().min(10, "Tell us a little more about what to pray for").max(2000),
  isConfidential: z.boolean().default(false),
});

export type PrayerRequestInput = z.infer<typeof prayerRequestSchema>;
