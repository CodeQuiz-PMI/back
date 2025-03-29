import "dotenv/config";
import Jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { AppError } from "../../errors";

export const tokenValidMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  try {
    const decoded = Jwt.verify(
      token,
      process.env.SECRET_KEY!
    ) as Jwt.JwtPayload;

    response.locals.userId = decoded.sub;

    return next();
  } catch (error: any) {
    throw new AppError(error.message, 401);
  }
};
