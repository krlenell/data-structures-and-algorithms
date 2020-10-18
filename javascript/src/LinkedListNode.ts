export default class LinkedListNode<T> {
  value: T
  next: null | LinkedListNode<T>

  constructor(element: T){
    this.value= element
    this.next = null
  }
}
