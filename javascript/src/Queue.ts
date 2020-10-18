export default class Queue<T>{
  private line: Array<T>

  constructor(){
    this.line = new Array()
  }

  enqueue(element: T){
    this.line.push(element)
  }

  dequeue(){
    this.line.shift()
  }

  peek(){
    this.line[0]
  }
}
