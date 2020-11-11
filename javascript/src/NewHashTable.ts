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
  table = new Array(7);

  get = (key: string) => {
    const index = hashFunction(key, this.table.length);
    return this.table[index]?.[1];
  };

  set = (key: string, value: T) => {
    const index = hashFunction(key, this.table.length);
    this.table[index] = [key, value];
    //test if idnex is occupied to chain
  };

  //resize
}

const myTable = new NewHashTable();
myTable.set("jeff", 100);
console.log(myTable);
console.log(myTable.get("jeff"));
