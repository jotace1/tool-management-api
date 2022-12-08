import { IToolEntity } from "@domain/entities/toolEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export const IToolRepositoryToken = Symbol.for("IToolRepository");

export interface IToolRepository {
  create(toolEntity: IToolEntity): Promise<Either<IError, IToolEntity>>;
  delete(reminderId: number): Promise<Either<IError, string>>;
  listByTag(tag: string): Promise<Either<IError, IToolEntity[]>>;
  listByUserId(userId: number): Promise<Either<IError, IToolEntity[]>>;
}
