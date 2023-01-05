import { left, Either, right } from "../../shared/either";
import { IError } from "../../shared/iError";
import { AbstractEntity } from "./abstractEntity";

export interface IUserEntity {
  name: string | null;
  email: string;
  password: string;
}

export class UserEntity extends AbstractEntity<IUserEntity> {
  static create(props: IUserEntity): Either<IError, UserEntity> {
    const userEntity = new UserEntity({
      ...props,
    });

    return right(userEntity);
  }
}
