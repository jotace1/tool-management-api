import { userIdRequiredError } from "@domain/errors/reminder";
import { left, Either, right } from "../../shared/either";
import { IError } from "../../shared/iError";
import { AbstractEntity } from "./abstractEntity";

export interface IToolEntity {
  id?: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
  userId: number;
}

export class ToolEntity extends AbstractEntity<IToolEntity> {
  static create(props: IToolEntity): Either<IError, ToolEntity> {
    if (!props.userId) {
      return left(userIdRequiredError);
    }

    const toolEntity = new ToolEntity({
      ...props,
    });

    return right(toolEntity);
  }
}
