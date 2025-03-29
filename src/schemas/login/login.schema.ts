import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().max(250).min(3),
  password: z.string().max(250).min(8),
});
