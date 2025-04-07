import { AppDataSource } from "../../data-source";
import { Level } from "../../entities/Level";

export const levelListByIdService = async (id: number): Promise<Level | null> => {
  const levelRepository = AppDataSource.getRepository(Level);
  const level = await levelRepository.findOneBy({ id });
  return level;
};
