import { DeleteToolOperator } from "@controller/operators/tool/deleteToolOperator";
import { InputDeleteTool } from "@controller/serializers/tool/deleteToolSerializer";
import { container } from "@shared/ioc/container";
import { Request, Response } from "express";
import { injectable } from "inversify";
import AbstractHandler from "../abstractHandler";

@injectable()
export class DeleteTool implements AbstractHandler {
  async run(request: Request, response: Response) {
    try {
      const deleteToolOperator = container.get(DeleteToolOperator);
      const input = new InputDeleteTool(request.params);

      const tool = await deleteToolOperator.exec(input);

      if (tool.isLeft()) {
        return response.status(400).json(tool.value);
      }

      return response.status(200).json(tool.value);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
