import { IToolEntity } from "@domain/entities/toolEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export interface InputDeleteToolDto {
  toolId: number;
}

export type OutputDeleteToolDto = Either<IError, string>;
