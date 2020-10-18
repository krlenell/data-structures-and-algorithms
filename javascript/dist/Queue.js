"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.line = new Array();
    }
    Queue.prototype.enqueue = function (element) {
        this.line.push(element);
    };
    Queue.prototype.dequeue = function () {
        this.line.shift();
    };
    return Queue;
}());
exports.default = Queue;
