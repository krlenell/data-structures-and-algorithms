import { cursorTo } from 'readline'
import LinkedListNode from './LinkedListNode'

export default class LinkedList<T> {
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
    let current: null | LinkedListNode<T> = this.head
    while(current){
      if(current.value === value){
        return true
      }
      current = current.next
    }
    return false
  }

  behead(): LinkedList<T>{
    if(this.head === null || this.head.next === undefined){
      return this
    }
    this.head = this.head.next
    this.length--
    return this
  }

  // remove(value: T): boolean{
  //   if(this.head === null){
  //     return false
  //   }
  //   let curr: LinkedListNode<T> = this.head
  //   if(curr.value === value){
  //     if(this.head === this.tail){
  //       this.head = null
  //       this.tail = null
  //       return true
  //     }
  //     this.head = this.head.next
  //     return true
  //   }
  //   let prev: LinkedListNode<T>

  //   return false
  // }

  toArray(): any[] {
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
}
