import { z } from "zod";

export const userCreateSchema = z.object({
  name: z.string().max(250).min(3),
  email: z.string().max(250).min(3),
  password: z.string().max(250).min(8),
});

export const userUpdateSchema = userCreateSchema.partial();

export const userReturnSchema = userCreateSchema.extend({
  id: z.number(),
  currentLevel: z.number(),
  currentSection: z.number(),
  currentQuestion: z.number(),
  trophies: z.number(),
  totalPoints: z.number(),
});

export const userReturnWithoutPassSchema = userReturnSchema.omit({
  password: true,
});
