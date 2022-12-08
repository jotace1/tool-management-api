"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorModule = void 0;
var inversify_1 = require("inversify");
var createToolOperator_1 = require("@controller/operators/tool/createToolOperator");
exports.OperatorModule = new inversify_1.ContainerModule(function (bind) {
    bind(createToolOperator_1.CreateToolOperator).to(createToolOperator_1.CreateToolOperator);
});
