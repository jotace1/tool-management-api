"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolEntity = void 0;
var reminder_1 = require("@domain/errors/reminder");
var either_1 = require("../../shared/either");
var abstractEntity_1 = require("./abstractEntity");
var ToolEntity = /** @class */ (function (_super) {
    __extends(ToolEntity, _super);
    function ToolEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolEntity.create = function (props) {
        if (!props.userId) {
            return (0, either_1.left)(reminder_1.userIdRequiredError);
        }
        var toolEntity = new ToolEntity(__assign({}, props));
        return (0, either_1.right)(toolEntity);
    };
    return ToolEntity;
}(abstractEntity_1.AbstractEntity));
exports.ToolEntity = ToolEntity;