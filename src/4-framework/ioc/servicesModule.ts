import { ContainerModule, interfaces } from "inversify";
import {
  IHashService,
  IHashServiceToken,
} from "@business/services/iHashService";
import { HashService } from "@framework/services/hashService";

export const ServicesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IHashService>(IHashServiceToken).to(HashService);
});
