const LinkedList = require("../src/LinkedList")

const list = new(LinkedList)

list.add("banana")

list.add("apple")

list.add("orange")

console.log(list.contains("apple"))
