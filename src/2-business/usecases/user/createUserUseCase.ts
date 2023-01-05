import { injectable, inject } from "inversify";
import { IUseCase } from "../iUseCase";
import { left, right } from "@shared/either";
import { UserEntity } from "@domain/entities/userEntity";
import {
  InputCreateUserDto,
  OutputCreateUserDto,
  UserOutputDto,
} from "@business/dto/user/createUserDto";
import {
  IUserRepository,
  IUserRepositoryToken,
} from "@business/repository/userRepository";
import {
  IHashService,
  IHashServiceToken,
} from "@business/services/iHashService";
import { userAlreadyExistsError } from "@business/modules/errors/user";

@injectable()
export class CreateUserUseCase
  implements IUseCase<InputCreateUserDto, OutputCreateUserDto>
{
  public constructor(
    @inject(IUserRepositoryToken)
    private userRepository: IUserRepository,
    @inject(IHashServiceToken) private hashService: IHashService
  ) {}

  async exec(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
    const existentUser = await this.userRepository.findByEmail(input.email);

    if (existentUser.isLeft()) {
      return left(existentUser.value);
    }

    if (existentUser.value) {
      return left(userAlreadyExistsError);
    }

    const hashedPassword = await this.hashService.hashPassword(input.password);

    if (hashedPassword.isLeft()) {
      return left(hashedPassword.value);
    }

    input.password = hashedPassword.value;

    const userEntity = UserEntity.create(input);

    if (userEntity.isLeft()) {
      return left(userEntity.value);
    }

    const user = await this.userRepository.create(userEntity.value.export());

    if (user.isLeft()) {
      return left(user.value);
    }

    const output: UserOutputDto = {
      id: user.value.id,
      name: user.value.name,
      email: user.value.email,
    };

    return right(output);
  }
}
