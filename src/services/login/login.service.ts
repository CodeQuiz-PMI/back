import "dotenv/config";
import Jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { Repository } from "typeorm";

import { User } from "../../entities";
import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors";
import { tLogin } from "../../interfaces";

export const loginService = async (loginData: tLogin): Promise<object> => {
  const { email, password } = loginData;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPassword: boolean = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = Jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });

  const userId = user.id;

  const returnToken = {
    token: token,
    // userId: userId,
  };

  return returnToken;
};
