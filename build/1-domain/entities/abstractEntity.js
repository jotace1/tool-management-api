"use strict";
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
exports.AbstractEntity = void 0;
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(props) {
        if (!props) {
            props = {};
        }
        this.props = props;
    }
    AbstractEntity.prototype.export = function () {
        return __assign({}, this.props);
    };
    AbstractEntity.prototype.exportJson = function () {
        return JSON.stringify(this.props);
    };
    return AbstractEntity;
}());
exports.AbstractEntity = AbstractEntity;
