"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
var toolRepository_1 = require("@business/repository/toolRepository");
var toolRepository_2 = require("@framework/repositories/toolRepository");
var inversify_1 = require("inversify");
exports.RepositoryModule = new inversify_1.ContainerModule(function (bind) {
    bind(toolRepository_1.IToolRepositoryToken).to(toolRepository_2.ToolRepository);
});
