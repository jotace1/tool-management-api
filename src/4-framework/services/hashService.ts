import { passwordDoesNotMatch } from "@business/modules/errors/user";
import { IHashService } from "@business/services/iHashService";
import { Either, left, right } from "@shared/either";
import { IError } from "@shared/iError";
import bcrypt from "bcrypt";
import { injectable } from "inversify";

@injectable()
export class HashService implements IHashService {
  private readonly saltRounds: number = 10;

  async passwordsMatch(
    oldPassword: string,
    newPassword: string
  ): Promise<Either<IError, boolean>> {
    const passwordMatch = await bcrypt.compare(newPassword, oldPassword);

    if (!passwordMatch) {
      return left(passwordDoesNotMatch);
    }

    return right(passwordMatch);
  }

  async hashPassword(password: string): Promise<Either<IError, string>> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hash = await bcrypt.hash(password, salt);

    return right(hash);
  }
}
