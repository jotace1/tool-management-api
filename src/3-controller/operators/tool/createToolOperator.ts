import { CreateToolUseCase } from "@business/usecases/tool/createToolUseCase";
import {
  InputCreateTool,
  OutputCreateTool,
} from "@controller/serializers/tool/createToolSerializer";
import { left } from "@shared/either";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class CreateToolOperator extends AbstractOperator<
  InputCreateTool,
  OutputCreateTool
> {
  public constructor(
    @inject(CreateToolUseCase) private createToolUseCase: CreateToolUseCase
  ) {
    super();
  }

  protected async run(input: InputCreateTool): Promise<OutputCreateTool> {
    const tool = await this.createToolUseCase.exec(input);

    if (tool.isLeft()) {
      return left(tool.value);
    }

    return tool;
  }
}
