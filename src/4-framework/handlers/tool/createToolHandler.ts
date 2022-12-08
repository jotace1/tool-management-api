import { CreateToolOperator } from "@controller/operators/tool/createToolOperator";
import { InputCreateTool } from "@controller/serializers/tool/createToolSerializer";
import { container } from "@shared/ioc/container";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import AbstractHandler from "../abstractHandler";

@injectable()
export class CreateTool implements AbstractHandler {
  async run(request: Request, response: Response) {
    try {
      const createToolOperator = container.get(CreateToolOperator);

      const input = new InputCreateTool(request.body);

      const user = await createToolOperator.exec(input);

      if (user.isLeft()) {
        return response.status(400).json(user.value);
      }

      return response.status(201).json(user.value);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
