import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleErrors = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  if (error instanceof AppError) {
    console.log(error.statusCode);
    response.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    response.status(400).json(error.flatten().fieldErrors);
  }

  response.status(500).json({
    message: "Internal server error",
  });
};
