import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { tUserReturn, tUserReturnWithoutPassSchema } from "../../interfaces";

export const userListById = async (
  id: number
): Promise<tUserReturnWithoutPassSchema> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const { password, ...userWithoutPass }: tUserReturn = findUser;

  return userWithoutPass;
};
