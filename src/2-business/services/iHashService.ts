import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export const IHashServiceToken = Symbol.for("IHashService");

export interface IHashService {
  passwordsMatch(
    oldPassword: string,
    newPassword: string
  ): Either<IError, boolean>;
  hashPassword(password: string): Either<IError, void>;
}
