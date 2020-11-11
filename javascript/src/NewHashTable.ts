import { table } from "console";

function hashFunction(key: string, tableSize: number): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  hash = (17 * hash) % tableSize;
  return hash;
}

class NewHashTable<T> {
  table = new Array<Array<[string, T]>>(7);

  get = (key: string) => {
    const index = hashFunction(key, this.table.length);
    return this.table[index].find((x) => x[0] === key)?.[1];
  };

  set = (key: string, value: T) => {
    const index = hashFunction(key, this.table.length);
    const pair: [string, T] = [key, value];
    if (this.table[index]) {
      this.table[index].push(pair);
    } else {
      this.table[index] = [pair];
    }
  };

  //resize
}

const myTable = new NewHashTable();
myTable.set("jeff", 100);
console.log(myTable);
console.log(myTable.get("jeff"));
