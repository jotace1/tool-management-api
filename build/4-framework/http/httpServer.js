"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressHttpServer = exports.HttpMethods = void 0;
var express_1 = __importDefault(require("express"));
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["POST"] = "post";
    HttpMethods["GET"] = "get";
    HttpMethods["PUT"] = "put";
    HttpMethods["DELETE"] = "delete";
})(HttpMethods = exports.HttpMethods || (exports.HttpMethods = {}));
var ExpressHttpServer = /** @class */ (function () {
    function ExpressHttpServer() {
        this.app = (0, express_1.default)();
    }
    ExpressHttpServer.prototype.register = function (method, url, handler) {
        this.app[method](url, handler.run);
    };
    ExpressHttpServer.prototype.listen = function (port) {
        this.app.listen(port, function () {
            console.log("Server is running on port ".concat(port));
        });
    };
    return ExpressHttpServer;
}());
exports.ExpressHttpServer = ExpressHttpServer;
