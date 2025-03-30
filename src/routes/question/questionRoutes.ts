import { Router } from "express";
import { questionCreateController, questionListAllController } from "../../controllers";
export const questionRoutes: Router = Router();
questionRoutes.post("", questionCreateController);
questionRoutes.get("", questionListAllController);
questionRoutes.get("/:id");
questionRoutes.patch("/:id");
questionRoutes.delete("/:id");