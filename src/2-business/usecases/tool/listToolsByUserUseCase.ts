import { injectable, inject } from "inversify";
import { IUseCase } from "../iUseCase";
import { left, right } from "@shared/either";
import {
  InputListToolsByUserDto,
  OutputListToolsByUserDto,
} from "@business/dto/tool/listToolsByUserDto";
import {
  IToolRepository,
  IToolRepositoryToken,
} from "@business/repository/toolRepository";

@injectable()
export class ListToolsByUserUseCase
  implements IUseCase<InputListToolsByUserDto, OutputListToolsByUserDto>
{
  public constructor(
    @inject(IToolRepositoryToken)
    private toolRepository: IToolRepository
  ) {}

  async exec(
    input: InputListToolsByUserDto
  ): Promise<OutputListToolsByUserDto> {
    const toolsByUser = await this.toolRepository.listByUserId(input.userId);

    if (toolsByUser.isLeft()) {
      return left(toolsByUser.value);
    }

    return right(toolsByUser.value);
  }
}
