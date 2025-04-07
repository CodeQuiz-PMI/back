import { AppDataSource } from "../../data-source";
import { Level } from "../../entities/Level";

export const levelDeleteService = async (id: number): Promise<void> => {
  const levelRepository = AppDataSource.getRepository(Level);
  await levelRepository.delete(id);
};
