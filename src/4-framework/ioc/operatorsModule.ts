import { ContainerModule, interfaces } from "inversify";
import { CreateToolOperator } from "@controller/operators/tool/createToolOperator";
import { ListToolsByUserOperator } from "@controller/operators/tool/listToolsByUserOperator";

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateToolOperator).to(CreateToolOperator);
  bind(ListToolsByUserOperator).to(ListToolsByUserOperator);
});
