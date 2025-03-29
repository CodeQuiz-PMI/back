import { Request, Response } from "express";
import { tLogin } from "../../interfaces";
import { loginService } from "../../services";

export const loginController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const loginData: tLogin = request.body;

  const token: object = await loginService(loginData);

  return response.json(token);
};
