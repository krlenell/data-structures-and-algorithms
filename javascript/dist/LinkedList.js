"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode_1 = __importDefault(require("./LinkedListNode"));
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new LinkedListNode_1.default(value);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
            return this;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    };
    LinkedList.prototype.prepend = function (value) {
        var node = new LinkedListNode_1.default(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return this;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    };
    LinkedList.prototype.contains = function (value) {
        if (!this.head) {
            return false;
        }
        var current = this.head;
        while (current.next) {
            if (current.value === value) {
                return true;
            }
        }
        return false;
    };
    return LinkedList;
}());
exports.default = LinkedList;
