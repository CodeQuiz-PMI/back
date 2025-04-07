import { Router } from "express";
import {
  levelCreateController,
  levelListAllController,
  levelListByIdController,
  levelUpdateController,
  levelDeleteController,
} from "../controllers/level.controller";

export const levelRoutes: Router = Router();

levelRoutes.post("", levelCreateController);
levelRoutes.get("", levelListAllController);
levelRoutes.get("/:id", levelListByIdController);
levelRoutes.patch("/:id", levelUpdateController);
levelRoutes.delete("/:id", levelDeleteController);


