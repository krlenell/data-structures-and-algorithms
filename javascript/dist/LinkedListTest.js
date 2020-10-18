const { openStdin } = require('process')

const LinkedList = require('./LinkedList').default

const list = new LinkedList()

list.add("2")

list.add("3")

list.add("4")

list.prepend("1")

list.prepend("0")

list.behead()

list.remove("4")


console.log(list.toArray())

console.log(list.contains("4"))
