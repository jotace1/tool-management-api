import { ListToolsByUserUseCase } from "@business/usecases/tool/listToolsByUserUseCase";
import {
  InputListToolsByUser,
  OutputListToolsByUser,
} from "@controller/serializers/tool/listToolsByUserSerializer";
import { left, right } from "@shared/either";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class ListToolsByUserOperator extends AbstractOperator<
  InputListToolsByUser,
  OutputListToolsByUser
> {
  public constructor(
    @inject(ListToolsByUserUseCase)
    private listToolsByUserUseCase: ListToolsByUserUseCase
  ) {
    super();
  }

  protected async run(
    input: InputListToolsByUser
  ): Promise<OutputListToolsByUser> {
    const tools = await this.listToolsByUserUseCase.exec({
      userId: Number(input.userId),
    });

    if (tools.isLeft()) {
      return left(tools.value);
    }

    return right(tools.value);
  }
}
