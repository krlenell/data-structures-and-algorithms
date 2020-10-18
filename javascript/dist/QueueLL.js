"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = __importDefault(require("./LinkedList"));
var QueueLL = /** @class */ (function () {
    function QueueLL() {
        this.line = new LinkedList_1.default();
    }
    QueueLL.prototype.enqueue = function (value) {
        this.line.add(value);
        return this;
    };
    QueueLL.prototype.dequeue = function () {
        var beheaded = this.line.behead();
        if (beheaded) {
            return beheaded.value;
        }
        return null;
    };
    QueueLL.prototype.peek = function () {
        var beheaded = this.line.behead();
        if (beheaded) {
            this.line.prepend(beheaded.value);
            return beheaded.value;
        }
        return beheaded;
    };
    return QueueLL;
}());
exports.default = QueueLL;
