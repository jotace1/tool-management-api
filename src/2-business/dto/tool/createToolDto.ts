import { IToolEntity } from "@domain/entities/toolEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/iError";

export type InputCreateToolDto = IToolEntity;

export type OutputCreateToolDto = Either<IError, IToolEntity>;
