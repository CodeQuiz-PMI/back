import "express-async-errors";
import cors from "cors";
import express, { Application } from "express";
import { handleErrors } from "./errors";

import { userRoutes } from "./routes";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/question", questionRoutes);

app.use(handleErrors);

export default app;
