import { OutputCreateUserDto } from "@business/dto/user/createUserDto";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Validatable } from "../abstractValidatable";

export class InputCreateUser extends Validatable<InputCreateUser> {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}

export type OutputCreateUser = OutputCreateUserDto;
