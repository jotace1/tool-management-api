import { ContainerModule, interfaces } from "inversify";
import { CreateToolOperator } from "@controller/operators/tool/createToolOperator";
import { ListToolsByUserOperator } from "@controller/operators/tool/listToolsByUserOperator";
import { DeleteToolOperator } from "@controller/operators/tool/deleteToolOperator";
import { CreateUserOperator } from "@controller/operators/user/createUserOperator";

export const OperatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateToolOperator).to(CreateToolOperator);
  bind(ListToolsByUserOperator).to(ListToolsByUserOperator);
  bind(DeleteToolOperator).to(DeleteToolOperator);
  bind(CreateUserOperator).to(CreateUserOperator);
});
