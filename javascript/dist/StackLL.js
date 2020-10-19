"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = __importDefault(require("./LinkedList"));
var Stack = /** @class */ (function () {
    function Stack() {
        this.list = new LinkedList_1.default();
    }
    Stack.prototype.push = function (value) {
        this.list.prepend(value);
        return this;
    };
    Stack.prototype.pop = function () {
        var beheaded = this.list.behead();
        if (beheaded) {
            return beheaded.value;
        }
        return null;
    };
    Stack.prototype.peek = function () {
        var beheaded = this.list.behead();
        if (beheaded) {
            this.list.prepend(beheaded.value);
            return beheaded.value;
        }
        return null;
    };
    return Stack;
}());
exports.default = Stack;
