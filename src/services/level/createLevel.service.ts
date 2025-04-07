import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Level } from "../../entities";
import { tLevelRequest, tLevelReturn } from "../../interfaces/level/level.interfaces";
import { levelReturnSchema } from "../../schemas/level/level.schemas";

export const levelCreateService = async (
  levelData: tLevelRequest
): Promise<tLevelReturn> => {
  const levelRepository: Repository<Level> = AppDataSource.getRepository(Level);

  const newLevel = levelRepository.create({
    ...levelData,
    createdAt: new Date()
  });

  await levelRepository.save(newLevel);

  const level = levelReturnSchema.parse(newLevel);
  return level;
};
