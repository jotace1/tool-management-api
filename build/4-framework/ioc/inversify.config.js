"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("@shared/ioc/container");
var repositoryModule_1 = require("./repositoryModule");
var useCasesModule_1 = require("./useCasesModule");
var operatorsModule_1 = require("./operatorsModule");
container_1.container.load(repositoryModule_1.RepositoryModule);
container_1.container.load(useCasesModule_1.UseCasesModule);
container_1.container.load(operatorsModule_1.OperatorModule);
