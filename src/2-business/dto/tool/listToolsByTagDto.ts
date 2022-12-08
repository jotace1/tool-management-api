import { IToolEntity } from "@domain/entities/toolEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export type InputListToolsByTagDto = {
  tag: string;
};

export type OutputListToolsByTagDto = Either<IError, IToolEntity[]>;
