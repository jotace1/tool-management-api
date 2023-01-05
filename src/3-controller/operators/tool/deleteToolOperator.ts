import { DeleteToolUseCase } from "@business/usecases/tool/deleteToolUseCase";
import {
  InputDeleteTool,
  OutputDeleteTool,
} from "@controller/serializers/tool/deleteToolSerializer";
import { left } from "@shared/either";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class DeleteToolOperator extends AbstractOperator<
  InputDeleteTool,
  OutputDeleteTool
> {
  public constructor(
    @inject(DeleteToolUseCase) private deleteToolUseCase: DeleteToolUseCase
  ) {
    super();
  }

  protected async run(input: InputDeleteTool): Promise<OutputDeleteTool> {
    const tool = await this.deleteToolUseCase.exec({
      toolId: Number(input.toolId),
    });

    if (tool.isLeft()) {
      return left(tool.value);
    }

    return tool;
  }
}
