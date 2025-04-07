import { z } from "zod";
import {
  levelCreateSchema,
  levelReturnSchema,
  levelArraySchema,
} from "../../schemas/level/level.schemas";

// Tipo para criar level (entrada do frontend)
export type tLevelRequest = z.infer<typeof levelCreateSchema>;

// Tipo de retorno de um level
export type tLevelReturn = z.infer<typeof levelReturnSchema>;

// Tipo para retorno de lista de níveis
export type tLevelArray = z.infer<typeof levelArraySchema>;
