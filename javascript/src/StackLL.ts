import LinkedList from './LinkedList'

export default class Stack<T> {
  list: LinkedList<T>

  constructor(){
    this.list = new LinkedList()
  }

  push(value: T): this{
    this.list.prepend(value)
    return this
  }

  pop(): null | T {
    const beheaded = this.list.behead()
    if(beheaded){
      return beheaded.value
    }
    return null
  }

  peek(): null | T {
    const beheaded = this.list.behead()
    if(beheaded){
      this.list.prepend(beheaded.value)
      return beheaded.value
    }
    return null
  }
}
