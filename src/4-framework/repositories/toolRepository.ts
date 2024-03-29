import { PrismaClient, Prisma } from "@prisma/client";
import { injectable, inject } from "inversify";
import { IToolRepository } from "@business/repository/toolRepository";
import { IToolEntity } from "@domain/entities/toolEntity";
import { IError } from "@shared/iError";
import { Either, left, right } from "@shared/either";
import { TOOL_DELETED_SUCCESSFULY } from "@business/modules/const/tool/messages";

const prisma = new PrismaClient();

@injectable()
export class ToolRepository implements IToolRepository {
  private prismaClient: PrismaClient;

  public constructor() {
    this.prismaClient = prisma;
  }
  async create(toolEntity: IToolEntity): Promise<Either<IError, IToolEntity>> {
    try {
      const tool = await this.prismaClient.tool.create({
        data: {
          userId: toolEntity.userId,
          title: toolEntity.title,
          link: toolEntity.link,
          description: toolEntity.description,
          tags: toolEntity.tags,
        },
      });

      return right(tool);
    } catch (error) {
      const updatedError = error as any;

      return left(updatedError);
    }
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
    try {
      const tools = await this.prismaClient.tool.findMany({
        where: {
          userId: userId,
        },
      });

      return right(tools);
    } catch (error) {
      const updatedError = error as any;

      return left(updatedError);
    }
  }
}
