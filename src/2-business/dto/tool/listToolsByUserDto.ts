import { IToolEntity } from "@domain/entities/toolEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export type InputListToolsByUserDto = {
  userId: number;
};

export type OutputListToolsByUserDto = Either<IError, IToolEntity[]>;
