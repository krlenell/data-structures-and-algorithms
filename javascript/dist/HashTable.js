"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = __importDefault(require("./LinkedList"));
var defaultHashTableSize = 32;
var HashTable = /** @class */ (function () {
    function HashTable(hashtableSize) {
        if (hashtableSize === void 0) { hashtableSize = defaultHashTableSize; }
        this.buckets = Array(hashtableSize).fill(null).map(function () { return new LinkedList_1.default(); });
        this.keys = {};
    }
    HashTable.prototype.hash = function (key) {
        var hash = Array.from(key).reduce(function (hashAccumulator, character) { return (hashAccumulator + character.charCodeAt(0)); }, 0);
        return hash % this.buckets.length;
    };
    HashTable.prototype.set = function (key, value) {
        var hashKey = this.hash(key);
        this.keys[key] = hashKey;
    };
    return HashTable;
}());
exports.default = HashTable;
