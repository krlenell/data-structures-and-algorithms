function hashFunction(key: string, tableSize: number): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  hash = (17 * hash) % tableSize;
  return hash;
}

class NewHashTable<T> {
  table = new Array<Array<[string, T]>>(1);
  items = 0;
  keys: string[] = [];

  get = (key: string) => {
    const index = hashFunction(key, this.table.length);
    return this.table[index].find((x) => x[0] === key)?.[1];
  };

  set = (key: string, value: T) => {
    //checks if key already exists
    if (this.keys.includes(key)) {
      const index = hashFunction(key, this.table.length);
      //checks if array is worth searching
      if (this.table[index].length === 1) {
        this.table[index][0][1] = value;
      } else {
        const indx = this.table[index].findIndex((x) => x[0] === key);
        this.table[index][indx][1] = value;
      }
    } else {
      this.keys.push(key);
      this.items++;
      const loadFactor = this.table.length / this.items;
      if (loadFactor > 0.8) {
        this.resize(this.table.length * 2);
      }
      const index = hashFunction(key, this.table.length);
      const pair: [string, T] = [key, value];
      if (this.table[index]) {
        this.table[index].push(pair);
      } else {
        this.table[index] = [pair];
      }
    }
  };

  //resize
  resize = (length: number) => {
    const resizedTable = new Array<Array<[string, T]>>(length);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = hashFunction(key, length);
          const pair: [string, T] = [key, value];
          if (resizedTable[index]) {
            resizedTable[index].push(pair);
          } else {
            resizedTable[index] = [pair];
          }
        });
      }
    });
    this.table = resizedTable;
  };
}

const newMyTable = new NewHashTable();
newMyTable.set("jeff", 100);
newMyTable.set("steve", "hello");
console.log(newMyTable.table.length);
newMyTable.set("jim", "99");
newMyTable.set("bill", "69 dude");
console.log(newMyTable.table.length);
newMyTable.set("chris", "krisss");
newMyTable.set("chris", "oh hi");
console.log(newMyTable.items);
console.log(newMyTable.table);
console.log(newMyTable.get("jeff"));
console.log(newMyTable.get("chris"));
