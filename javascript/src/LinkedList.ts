import LinkedListNode from './LinkedListNode'

class LinkedList <T> {
  head: null | LinkedListNode<T>
  length: number

  constructor(){
    this.head = null
    this.length = 0
  }

  addNode(value: T): void{
    const node = new LinkedListNode(value)
    let current : LinkedListNode<T>
    if(this.head === null){
      this.head = node
    } else{
      current = this.head
      while(current.next){
        current= current.next
      }
      current.next = this.head
    }
    this.length++
  }


}
