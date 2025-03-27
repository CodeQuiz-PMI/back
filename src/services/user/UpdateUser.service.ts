import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  tUserReturnWithoutPassSchema,
  tUserUpdateRequest,
} from "../../interfaces";
import { AppError } from "../../errors";
import { userReturnWithoutPassSchema } from "../../schemas";

export const userUpdateService = async (
  userData: tUserUpdateRequest,
  id: number
): Promise<tUserReturnWithoutPassSchema> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUser = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!oldUser) {
    throw new AppError("User not found", 404);
  }

  Object.assign(oldUser, userData);

  await userRepository.save(oldUser);

  const userUpdated = userReturnWithoutPassSchema.parse(oldUser);

  return userUpdated;
};
