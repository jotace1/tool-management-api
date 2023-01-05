import { PrismaClient, Prisma } from "@prisma/client";
import { injectable, inject } from "inversify";
import { IToolRepository } from "@business/repository/toolRepository";
import { IToolEntity } from "@domain/entities/toolEntity";
import { IError } from "@shared/iError";
import { Either, left, right } from "@shared/either";
import { IUserRepository } from "@business/repository/userRepository";
import { IUserEntity } from "@domain/entities/userEntity";

const prisma = new PrismaClient();

@injectable()
export class UserRepository implements IUserRepository {
  private prismaClient: PrismaClient;

  public constructor() {
    this.prismaClient = prisma;
  }
  async create(userEntity: IUserEntity): Promise<Either<IError, IUserEntity>> {
    try {
      const user = await this.prismaClient.user.create({
        data: {
          email: userEntity.email,
          password: userEntity.password,
          name: userEntity.name,
        },
      });

      return right(user);
    } catch (error) {
      const updatedError = error as any;

      return left(updatedError);
    }
  }
}
