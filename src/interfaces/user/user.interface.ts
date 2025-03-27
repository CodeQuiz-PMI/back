import { z } from "zod";
import {
  userCreateSchema,
  userReturnAllSchema,
  userReturnSchema,
  userReturnWithoutPassSchema,
  userUpdateSchema,
} from "../../schemas";

export type tUserRequest = z.infer<typeof userCreateSchema>;
export type tUserUpdateRequest = z.infer<typeof userUpdateSchema>;
export type tUserReturn = z.infer<typeof userReturnSchema>;
export type tUserReturnWithoutPassSchema = z.infer<
  typeof userReturnWithoutPassSchema
>;
export type tUserReturnAll = z.infer<typeof userReturnAllSchema>;
