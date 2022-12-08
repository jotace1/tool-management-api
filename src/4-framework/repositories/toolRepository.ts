import { PrismaClient, Prisma } from "@prisma/client";
import { injectable, inject } from "inversify";
import { IToolRepository } from "@business/repository/toolRepository";
import { IToolEntity } from "@domain/entities/toolEntity";
import { IError } from "@shared/iError";
import { Either, right } from "@shared/either";
import { TOOL_DELETED_SUCCESSFULY } from "@business/modules/const/tool/messages";

const prisma = new PrismaClient();

@injectable()
export class ToolRepository implements IToolRepository {
  private prismaClient: PrismaClient;

  public constructor() {
    this.prismaClient = prisma;
  }
  async create(userEntity: IToolEntity): Promise<Either<IError, IToolEntity>> {
    const tool = await this.prismaClient.tool.create({
      data: {
        userId: userEntity.userId,
        title: userEntity.title,
        link: userEntity.link,
        description: userEntity.description,
        tags: userEntity.tags,
      },
    });

    return right(tool);
  }

  async delete(id: number): Promise<Either<IError, string>> {
    await this.prismaClient.tool.delete({
      where: {
        id: id,
      },
    });

    return right(TOOL_DELETED_SUCCESSFULY);
  }

  async listByTag(tag: string): Promise<Either<IError, IToolEntity[]>> {
    const tools = await this.prismaClient.tool.findMany({
      where: {
        tags: {
          has: tag,
        },
      },
    });

    return right(tools);
  }

  async listByUserId(userId: number): Promise<Either<IError, IToolEntity[]>> {
    const tools = await this.prismaClient.tool.findMany({
      where: {
        userId: userId,
      },
    });

    return right(tools);
  }
}
