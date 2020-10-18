import LinkedList from './LinkedList'
import LinkedListNode from './LinkedListNode'

export default class QueueLL<T>{
  line: LinkedList<T>

  constructor(){
    this.line  = new LinkedList()
  }

  enqueue(value: T){
    this.line.add(value)
    return this
  }

  dequeue(): null | T{
    const beheaded = this.line.behead()
    if(beheaded){
      return beheaded.value
    }
    return null
  }

  peek(): null | T {
    const beheaded = this.line.behead()
    if(beheaded){
      this.line.prepend(beheaded.value)
      return beheaded.value
    }
    return beheaded
  }

}
