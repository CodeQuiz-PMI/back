import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

export const userDeleteService = async (id: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: id },
  });

  if (!user) {
    throw new AppError("user not exist!", 404);
  }

  await userRepository.delete({ id: id });
};
