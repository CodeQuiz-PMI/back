import { Router } from "express";
import { questionCreateController, questionListAllController, questionListIdController, questionUpdateController } from "../../controllers";
import { questionDeleteService } from "../../services";
export const questionRoutes: Router = Router();
questionRoutes.post("", questionCreateController);
questionRoutes.get("", questionListAllController);
questionRoutes.get("/:id", questionListIdController);
questionRoutes.patch("/:id", questionUpdateController);
questionRoutes.delete("/:id", questionDeleteService);