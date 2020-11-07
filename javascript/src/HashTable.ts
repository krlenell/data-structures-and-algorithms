import LinkedList from './LinkedList'

const defaultHashTableSize = 32

interface keys{
  [propName: string] : number
}

export default class HashTable<T> {
  buckets: LinkedList<T>[]
  keys: keys

  constructor(hashtableSize: number = defaultHashTableSize){
    this.buckets = Array(hashtableSize).fill(null).map(() => new LinkedList())
    this.keys = {}
  }

  hash(key: string): number{
    const hash: number = Array.from(key).reduce(
      (hashAccumulator, character) => (hashAccumulator + character.charCodeAt(0))
    ,0)

    return hash % this.buckets.length
  }

  set(key: string, value: T){
    const hashKey: number = this.hash(key)
    this.keys[key] = hashKey

  }

}
