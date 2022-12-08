import { container } from "@shared/ioc/container";
import { RepositoryModule } from "./repositoryModule";
import { UseCasesModule } from "./useCasesModule";
import { OperatorModule } from "./operatorsModule";

container.load(RepositoryModule);
container.load(UseCasesModule);
container.load(OperatorModule);
