"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationError = void 0;
var validationError = function (details) {
    return {
        code: "val-001",
        message: "Validation Error",
        shortMessage: "validationError",
        details: details,
    };
};
exports.validationError = validationError;
