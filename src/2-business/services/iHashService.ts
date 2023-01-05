import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export const IHashServiceToken = Symbol.for("IHashService");

export interface IHashService {
  passwordsMatch(
    oldPassword: string,
    newPassword: string
  ): Promise<Either<IError, boolean>>;
  hashPassword(password: string): Promise<Either<IError, string>>;
}
