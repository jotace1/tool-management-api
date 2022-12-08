import { ContainerModule, interfaces } from "inversify";
import { CreateToolUseCase } from "@business/usecases/tool/createToolUseCase";

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateToolUseCase).to(CreateToolUseCase);
});
