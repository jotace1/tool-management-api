import { CreateUserUseCase } from "@business/usecases/user/createUserUseCase";
import {
  InputCreateUser,
  OutputCreateUser,
} from "@controller/serializers/user/createUserSerializer";
import { left } from "@shared/either";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class CreateUserOperator extends AbstractOperator<
  InputCreateUser,
  OutputCreateUser
> {
  public constructor(
    @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase
  ) {
    super();
  }

  protected async run(input: InputCreateUser): Promise<OutputCreateUser> {
    const user = await this.createUserUseCase.exec(input);

    if (user.isLeft()) {
      return left(user.value);
    }

    return user;
  }
}
