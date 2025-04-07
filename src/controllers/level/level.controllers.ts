import { Request, Response } from "express";
import { levelDeleteService, levelListAllService, levelListByIdService } from "../../services";
import { levelCreateService } from "../../services/level/createLevel.service";
import { levelUpdateService } from "../../services/level/levelUpdate.service";



export const levelCreateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const levelData = request.body;
  const newLevel = await levelCreateService(levelData);
  return response.status(201).json(newLevel);
};


export const levelListAllController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const levels = await levelListAllService();
  return response.status(200).json(levels);
};


export const levelListByIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = Number(request.params.id);
  const level = await levelListByIdService(id);
  if (!level) {
    return response.status(404).json({ message: "Level not found" });
  }
  return response.status(200).json(level);
};


export const levelUpdateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = Number(request.params.id);
  const data = request.body;

  const updated = await levelUpdateService(id, data);
  if (!updated) {
    return response.status(404).json({ message: "Level not found" });
  }

  return response.status(200).json(updated);
};


export const levelDeleteController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id = Number(request.params.id);
  await levelDeleteService(id);
  return response.status(204).send();
};


