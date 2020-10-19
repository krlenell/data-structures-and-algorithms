const StackLL = require('./StackLL').default

const stack  = new StackLL()

stack.push("5")
stack.push("4")
stack.push("3")
stack.push("2")
stack.push("1")

console.log(stack.peek())

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
