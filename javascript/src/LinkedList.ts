import LinkedListNode from './LinkedListNode'

export default class LinkedList<T> {
  private head: null | LinkedListNode<T>
  private tail: null | LinkedListNode<T>
  private length: number

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
    let current: null | LinkedListNode<T> = this.head
    while(current){
      if(current.value === value){
        return true
      }
      current = current.next
    }
    return false
  }

  find(
      value: T | undefined = undefined, callback: undefined | ((arg: T)=> T) = undefined
    ){
    if(!this.head){
      return null
    }
    let current: null | LinkedListNode<T> = this.head
    while(current){
      if(callback && callback(current.value)){
        return current
      }
      if(value !== undefined){
        if(current.value === value){
          return current
        }
      }
      current = current.next
    }
    return null
  }

  behead(): null | LinkedListNode<T>{
    if(this.head === null){
      return null
    }
    if (this.head.next === null){
      const head = this.head
      this.head = null
      this.length--
      return head
    }
    const head = this.head
    this.head = this.head.next
    this.length--
    return head
  }

  remove(value: T): boolean{
    if(this.head === null){
      return false
    }
    let curr: null | LinkedListNode<T> = this.head
    if(curr.value === value){
      if(this.head === this.tail){
        this.head = null
        this.tail = null
        return true
      }
      this.head = this.head.next
      return true
    }
    let prev: LinkedListNode<T> = curr
    curr = curr.next
    while(curr){
      if(curr.value === value){
        if(curr === this.tail){
          this.tail = prev
          prev.next = null
          return true
        }
        const next = curr.next
        prev.next = next
        return true
      }
      prev = curr
      curr = curr.next
    }
    return false
  }

  getLength(): number{
    return this.length
  }

  toArray(): LinkedListNode<T>[] {
    const returnArray: any[] = []
    if(!this.head){
      return returnArray
    }
    let curr = this.head
    returnArray.push({value: curr.value, next: curr.next})
    while(curr.next){
      curr = curr.next
      returnArray.push({ value: curr.value, next: curr.next })
    }
    return returnArray
  }

  *traverse(): Generator<T> {
    let node = this.head
    while(node){
      yield node.value
      node = node.next
    }
  }

  *reverseTraversal(): Generator<T> {
    if(this.tail && this.head){
      let curr = this.tail
      while(curr !== this.head){
        let prev = this.head
        while(prev.next !== curr && prev.next){
          prev = prev.next
        }
        yield curr.value
        curr = prev
      }
      yield curr.value
    }
  }
}
