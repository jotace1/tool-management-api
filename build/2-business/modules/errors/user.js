"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordDoesNotMatch = exports.userNotFoundError = void 0;
exports.userNotFoundError = {
    code: "USR-001",
    message: "User not found in the database",
    shortMessage: "user_not_found",
};
exports.passwordDoesNotMatch = {
    code: "PSWRD-001",
    message: "Your password does not match",
    shortMessage: "password_not_match",
};
