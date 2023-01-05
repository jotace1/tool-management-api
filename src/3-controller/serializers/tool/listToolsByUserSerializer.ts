import { OutputListToolsByUserDto } from "@business/dto/tool/listToolsByUserDto";
import { IsNotEmpty, IsString } from "class-validator";
import { Validatable } from "../abstractValidatable";

export class InputListToolsByUser extends Validatable<InputListToolsByUser> {
  @IsNotEmpty()
  @IsString()
  userId!: string;
}

export type OutputListToolsByUser = OutputListToolsByUserDto;
