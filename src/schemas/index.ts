import { loginSchema } from "./login/login.schema";
import { questionSchema, questionUpdateSchema, questionReturnSchema, questionReturnAllSchema } from "./question/question.schema";
import {
  userCreateSchema,
  userReturnWithoutPassSchema,
  userReturnSchema,
  userUpdateSchema,
  userReturnAllSchema,
} from "./user/user.schema";

export {
  userCreateSchema,
  userReturnWithoutPassSchema,
  userReturnSchema,
  userUpdateSchema,
  userReturnAllSchema,
  loginSchema,
  questionSchema,
  questionUpdateSchema,
  questionReturnSchema,
  questionReturnAllSchema,
};
