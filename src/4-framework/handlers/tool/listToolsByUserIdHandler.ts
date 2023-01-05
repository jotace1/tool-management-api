import { ListToolsByUserOperator } from "@controller/operators/tool/listToolsByUserOperator";
import { InputListToolsByUser } from "@controller/serializers/tool/listToolsByUserSerializer";
import { container } from "@shared/ioc/container";
import { Request, Response } from "express";
import { injectable } from "inversify";
import { env } from "process";
import AbstractHandler from "../abstractHandler";

@injectable()
export class ListToolByUserId implements AbstractHandler {
  async run(request: Request, response: Response) {
    try {
      const listToolsByUserIdOperator = container.get(ListToolsByUserOperator);

      const input = new InputListToolsByUser(request.params);

      const tool = await listToolsByUserIdOperator.exec(input);

      if (tool.isLeft()) {
        return response.status(400).json(tool.value);
      }

      return response.status(200).json(tool.value);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
