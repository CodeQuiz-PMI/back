import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { tUserReturnAll } from "../../interfaces";

export const userListAllService = async (): Promise<tUserReturnAll> => {
  const offerRepository: Repository<User> = AppDataSource.getRepository(User);

  const allUsers = await offerRepository.find();

  const usersWithoutPasswords = allUsers.map(({ password, ...user }) => user);

  return usersWithoutPasswords;
};
