import { injectable, inject } from "inversify";
import { IUseCase } from "../iUseCase";
import { left, right } from "@shared/either";
import {
  InputDeleteToolDto,
  OutputDeleteToolDto,
} from "@business/dto/tool/deleteToolDto";
import {
  IToolRepository,
  IToolRepositoryToken,
} from "@business/repository/toolRepository";

@injectable()
export class DeleteToolUseCase
  implements IUseCase<InputDeleteToolDto, OutputDeleteToolDto>
{
  public constructor(
    @inject(IToolRepositoryToken)
    private toolRepository: IToolRepository
  ) {}

  async exec(input: InputDeleteToolDto): Promise<OutputDeleteToolDto> {
    const response = await this.toolRepository.delete(input.toolId);

    if (response.isLeft()) {
      return left(response.value);
    }

    return right(response.value);
  }
}
