export default class LinkedListNode<T> {
  value: T
  next?: LinkedListNode<T>

  constructor(element: T){
    this.value= element
  }
}
