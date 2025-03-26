import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserRequest, tUserReturnWithoutPassSchema } from "../../interfaces";
import { userReturnWithoutPassSchema } from "../../schemas";

export const userCreateService = async (
  userData: tUserRequest
): Promise<tUserReturnWithoutPassSchema> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser = userRepository.create(userData);
  await userRepository.save(newUser);

  const user = userReturnWithoutPassSchema.parse(newUser);

  return user;
};
