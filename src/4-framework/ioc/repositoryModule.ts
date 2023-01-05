import {
  IToolRepository,
  IToolRepositoryToken,
} from "@business/repository/toolRepository";
import {
  IUserRepository,
  IUserRepositoryToken,
} from "@business/repository/userRepository";
import { ToolRepository } from "@framework/repositories/toolRepository";
import { UserRepository } from "@framework/repositories/userRepository";
import { ContainerModule, interfaces } from "inversify";

export const RepositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IToolRepository>(IToolRepositoryToken).to(ToolRepository);
  bind<IUserRepository>(IUserRepositoryToken).to(UserRepository);
});
