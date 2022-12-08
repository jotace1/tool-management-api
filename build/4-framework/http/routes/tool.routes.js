"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpServer_1 = require("../httpServer");
var createToolHandler_1 = require("@framework/handlers/tool/createToolHandler");
var ToolRoutes = /** @class */ (function () {
    function ToolRoutes(httpServer) {
        this.httpServer = httpServer;
    }
    ToolRoutes.prototype.register = function () {
        var createTool = new createToolHandler_1.CreateTool();
        this.httpServer.register(httpServer_1.HttpMethods.POST, "/tools", createTool);
    };
    return ToolRoutes;
}());
exports.default = ToolRoutes;
