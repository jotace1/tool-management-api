import { injectable, inject } from "inversify";
import { IUseCase } from "../iUseCase";
import { left, right } from "@shared/either";
import {
  InputListToolsByTagDto,
  OutputListToolsByTagDto,
} from "@business/dto/tool/listToolsByTagDto";
import {
  IToolRepository,
  IToolRepositoryToken,
} from "@business/repository/toolRepository";

@injectable()
export class ListToolsByTagUseCase
  implements IUseCase<InputListToolsByTagDto, OutputListToolsByTagDto>
{
  public constructor(
    @inject(IToolRepositoryToken)
    private toolRepository: IToolRepository
  ) {}

  async exec(input: InputListToolsByTagDto): Promise<OutputListToolsByTagDto> {
    const toolsByTag = await this.toolRepository.listByTag(input.tag);

    if (toolsByTag.isLeft()) {
      return left(toolsByTag.value);
    }

    return right(toolsByTag.value);
  }
}
