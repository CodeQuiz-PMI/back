import { Router } from "express";
import { userCreateController } from "../../controllers";

export const userRoutes: Router = Router();

userRoutes.post("", userCreateController);
// userRoutes.get("");
// userRoutes.get("");
// userRoutes.patch("");
// userRoutes.delete("");
