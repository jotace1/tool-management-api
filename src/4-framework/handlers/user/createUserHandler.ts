import { CreateUserOperator } from "@controller/operators/user/createUserOperator";
import { InputCreateUser } from "@controller/serializers/user/createUserSerializer";
import { container } from "@shared/ioc/container";
import { Request, Response } from "express";
import { injectable } from "inversify";
import AbstractHandler from "../abstractHandler";

@injectable()
export class CreateUser implements AbstractHandler {
  async run(request: Request, response: Response) {
    try {
      const createUserOperator = container.get(CreateUserOperator);
      const input = new InputCreateUser(request.body);

      const user = await createUserOperator.exec(input);

      if (user.isLeft()) {
        return response.status(400).json(user.value);
      }

      return response.status(201).json(user.value);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
