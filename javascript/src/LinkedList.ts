import LinkedListNode from './LinkedListNode'

class LinkedList <T> {
  head: null | LinkedListNode<T>
  tail: null | LinkedListNode<T>
  length: number

  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  add(value: T): LinkedList<T>{
    const node = new LinkedListNode(value)
    if(this.tail === null){
      this.head = node
      this.tail = node
      return this
    } else{
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  prepend(value: T): LinkedList<T>{
    const node = new LinkedListNode(value)
    if(this.head === null){
      this.head = node
      this.tail = node
      return this
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  contains(value: T): boolean{
    if(!this.head){
      return false
    }
    let current = this.head
    while(current.next){
      if(current.value === value){
        return true
      }
    }
    return false
  }


}

export default LinkedList
