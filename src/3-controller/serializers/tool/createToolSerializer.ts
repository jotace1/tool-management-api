import { OutputCreateToolDto } from "@business/dto/tool/createToolDto";
import { IsNotEmpty, IsString } from "class-validator";
import { Validatable } from "../abstractValidatable";

export class InputCreateTool extends Validatable<InputCreateTool> {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  link!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  tags!: string[];

  @IsNotEmpty()
  @IsString()
  userId!: number;
}

export type OutputCreateTool = OutputCreateToolDto;
