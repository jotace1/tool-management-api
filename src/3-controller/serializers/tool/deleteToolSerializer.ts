import { OutputDeleteToolDto } from "@business/dto/tool/deleteToolDto";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Validatable } from "../abstractValidatable";

export class InputDeleteTool extends Validatable<InputDeleteTool> {
  @IsNotEmpty()
  @IsString()
  toolId!: string;
}

export type OutputDeleteTool = OutputDeleteToolDto;
