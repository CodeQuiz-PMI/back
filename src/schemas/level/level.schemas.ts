import { z } from "zod";


export const levelCreateSchema = z.object({
  title: z.string().max(250),
  description: z.string().max(250),
  difficulty: z.enum(["Fácil", "Médio", "Difícil"]),
});


export const levelReturnSchema = levelCreateSchema.extend({
  id: z.number(),
  createdAt: z.string().or(z.date()), 
});


export const levelArraySchema = z.array(levelReturnSchema);
