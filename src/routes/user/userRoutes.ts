import { Router } from "express";
import {
  userCreateController,
  userDeleteController,
  userListAllController,
  userListIdController,
  userUpdateController,
} from "../../controllers";

export const userRoutes: Router = Router();

userRoutes.post("", userCreateController);
userRoutes.get("", userListAllController);
userRoutes.get("/:id", userListIdController);
userRoutes.patch("/:id", userUpdateController);
userRoutes.delete("/:id", userDeleteController);
