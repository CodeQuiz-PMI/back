import { Request, Response } from "express";
import {
  userCreateService,
  userDeleteService,
  userListAllService,
  userListById,
  userUpdateService,
} from "../../services";

export const userCreateController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const userData = request.body;
  const newUser = await userCreateService(userData);
  return response.json(newUser).status(201);
};

export const userListAllController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const userAll = await userListAllService();
  return response.status(200).json(userAll);
};

export const userListIdController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const id = Number(request.params.id);
  const user = await userListById(id);
  return response.status(200).json(user);
};

export const userUpdateController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const id = Number(request.params.id);
  const user = request.body;
  const userUpdated = await userUpdateService(user, id);
  return response.status(200).json(userUpdated);
};

export const userDeleteController = async (
  request: Request,
  response: Response
): Promise<any> => {
  const id = Number(request.params.id);
  await userDeleteService(id);
  return response.status(204).json();
};
