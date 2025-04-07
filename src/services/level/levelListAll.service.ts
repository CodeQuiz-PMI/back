import { AppDataSource } from "../../data-source";
import { Level } from "../../entities/Level";

export const levelListAllService = async (): Promise<Level[]> => {
  const levelRepository = AppDataSource.getRepository(Level);
  const levels = await levelRepository.find();
  return levels;
};
