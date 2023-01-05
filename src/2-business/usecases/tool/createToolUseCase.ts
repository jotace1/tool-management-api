import { injectable, inject } from "inversify";
import { IUseCase } from "../iUseCase";
import { left, right } from "@shared/either";
import { ToolEntity } from "@domain/entities/toolEntity";
import {
  InputCreateToolDto,
  OutputCreateToolDto,
} from "@business/dto/tool/createToolDto";
import {
  IToolRepository,
  IToolRepositoryToken,
} from "@business/repository/toolRepository";

@injectable()
export class CreateToolUseCase
  implements IUseCase<InputCreateToolDto, OutputCreateToolDto>
{
  public constructor(
    @inject(IToolRepositoryToken)
    private toolRepository: IToolRepository
  ) {}

  async exec(input: InputCreateToolDto): Promise<OutputCreateToolDto> {
    const toolEntity = ToolEntity.create(input);

    if (toolEntity.isLeft()) {
      return left(toolEntity.value);
    }

    const tool = await this.toolRepository.create(toolEntity.value.export());

    if (tool.isLeft()) {
      return left(tool.value);
    }

    return right(tool.value);
  }
}
