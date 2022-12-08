"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validatable = void 0;
var class_validator_1 = require("class-validator");
var Validatable = /** @class */ (function () {
    function Validatable(obj) {
        Object.assign(this, obj);
    }
    Validatable.prototype.isValid = function () {
        var errors = this.errors();
        return !errors || errors.length === 0;
    };
    Validatable.prototype.validate = function () {
        var errors = this.errors();
        if (errors && errors.length > 0) {
            throw errors;
        }
    };
    Validatable.prototype.errors = function () {
        return (0, class_validator_1.validateSync)(this);
    };
    return Validatable;
}());
exports.Validatable = Validatable;
