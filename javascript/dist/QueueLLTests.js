const QueueLL = require('./QueueLL').default

const q = new QueueLL()

q.enqueue("1")

q.enqueue("2")
q.enqueue("3")
q.enqueue("4")
q.enqueue("5")

console.log("q.peek()", q.peek())
console.log("q.dequeue()", q.dequeue())
console.log("q.dequeue()", q.dequeue())
console.log("q.dequeue()", q.dequeue())
console.log("q.dequeue()", q.dequeue())
console.log("q.dequeue()", q.dequeue())
