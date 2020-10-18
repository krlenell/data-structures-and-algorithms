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
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    };
    LinkedList.prototype.behead = function () {
        if (this.head === null || this.head.next === undefined) {
            return this;
        }
        this.head = this.head.next;
        this.length--;
        return this;
    };
    // remove(value: T): boolean{
    //   if(this.head === null){
    //     return false
    //   }
    //   let curr: LinkedListNode<T> = this.head
    //   if(curr.value === value){
    //     if(this.head === this.tail){
    //       this.head = null
    //       this.tail = null
    //       return true
    //     }
    //     this.head = this.head.next
    //     return true
    //   }
    //   let prev: LinkedListNode<T>
    //   return false
    // }
    LinkedList.prototype.getLength = function () {
        return this.length;
    };
    LinkedList.prototype.toArray = function () {
        var returnArray = [];
        if (!this.head) {
            return returnArray;
        }
        var curr = this.head;
        returnArray.push({ value: curr.value, next: curr.next });
        while (curr.next) {
            curr = curr.next;
            returnArray.push({ value: curr.value, next: curr.next });
        }
        return returnArray;
    };
    return LinkedList;
}());
exports.default = LinkedList;
