import { ContainerModule, interfaces } from "inversify";
import { CreateToolUseCase } from "@business/usecases/tool/createToolUseCase";
import { ListToolsByUserUseCase } from "@business/usecases/tool/listToolsByUserUseCase";

export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateToolUseCase).to(CreateToolUseCase);
  bind(ListToolsByUserUseCase).to(ListToolsByUserUseCase);
});
