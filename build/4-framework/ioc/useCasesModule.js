"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCasesModule = void 0;
var inversify_1 = require("inversify");
var createToolUseCase_1 = require("@business/usecases/tool/createToolUseCase");
exports.UseCasesModule = new inversify_1.ContainerModule(function (bind) {
    bind(createToolUseCase_1.CreateToolUseCase).to(createToolUseCase_1.CreateToolUseCase);
});
