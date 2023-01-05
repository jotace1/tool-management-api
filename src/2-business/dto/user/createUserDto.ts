import { IUserEntity } from "@domain/entities/userEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export type InputCreateUserDto = IUserEntity;

export interface UserOutputDto {
  id?: number | null;
  name: string | null;
  email: string;
}

export type OutputCreateUserDto = Either<IError, UserOutputDto>;
