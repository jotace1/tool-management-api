"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
var httpServer_1 = require("@framework/http/httpServer");
var tool_routes_1 = __importDefault(require("@framework/http/routes/tool.routes"));
var httpServer = new httpServer_1.ExpressHttpServer();
var toolRoutes = new tool_routes_1.default(httpServer);
toolRoutes.register();
httpServer.listen(8080);
