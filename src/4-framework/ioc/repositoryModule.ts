import {
  IToolRepository,
  IToolRepositoryToken,
} from "@business/repository/toolRepository";
import { ToolRepository } from "@framework/repositories/toolRepository";
import { ContainerModule, interfaces } from "inversify";

export const RepositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IToolRepository>(IToolRepositoryToken).to(ToolRepository);
});
