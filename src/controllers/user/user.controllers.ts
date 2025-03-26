import { Request, Response } from "express";
import { userCreateService } from "../../services";
import { AppError } from "../../errors";

export const userCreateController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const userData = request.body;
  const newUser = await userCreateService(userData);
  return response.json(newUser).status(201);
};

export const userListController = async (
  request: Request,
  response: Response
): Promise<any> => {
  return response.status(200).json();
};

export const userListIdController = async (
  request: Request,
  response: Response
): Promise<any> => {
  return response.status(200).json();
};

export const userUpdateController = async (
  request: Request,
  response: Response
): Promise<any> => {
  return response.status(200).json();
};

export const userDeleteController = async (
  request: Request,
  response: Response
): Promise<any> => {
  return response.status(204).json();
};
