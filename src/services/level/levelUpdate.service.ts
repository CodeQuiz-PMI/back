import { AppDataSource } from "../../data-source";
import { Level } from "../../entities/Level";
import { DeepPartial } from "typeorm";

export const levelUpdateService = async (
  id: number,
  data: DeepPartial<Level>
): Promise<Level | null> => {
  const levelRepository = AppDataSource.getRepository(Level);

  const level = await levelRepository.findOneBy({ id });
  if (!level) return null;

  const updatedLevel = levelRepository.merge(level, data);
  await levelRepository.save(updatedLevel);

  return updatedLevel;
};
