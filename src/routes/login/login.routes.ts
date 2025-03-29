import { Router } from "express";
import { validBodyMiddleware } from "../../middlewares";
import { loginController } from "../../controllers";
import { loginSchema } from "../../schemas";

export const loginRouter: Router = Router();

loginRouter.post("", validBodyMiddleware(loginSchema), loginController);
