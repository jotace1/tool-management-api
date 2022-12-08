import { ContainerModule, interfaces } from "inversify";
import { CreateToolOperator } from "@controller/operators/tool/createToolOperator";

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateToolOperator).to(CreateToolOperator);
});
