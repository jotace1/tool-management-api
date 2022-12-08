import { IUserEntity } from "@domain/entities/userEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export const IUserRepositoryToken = Symbol.for("IUserRepository");

export interface IUserRepository {
  create(userEntity: IUserEntity): Promise<Either<IError, IUserEntity>>;
  changePassword(newPassword: string): Promise<Either<IError, IUserEntity>>;
  findByEmail(email: string): Promise<Either<IError, IUserEntity>>;
}
