function hashStringtoInt(s: string, tableSize: number): number {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (17 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

type keyPair<T> = [string, T];

class HashTable<T> {
  table = new Array<Array<[string, T]>>(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array<Array<[string, T]>>(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = hashStringtoInt(key, newTable.length);
          const pair: keyPair<T> = [key, value];
          if (newTable[index]) {
            newTable[index].push(pair);
          } else {
            newTable[index] = [pair];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key: string, value: T) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      //resize
      this.resize();
    }
    const index = hashStringtoInt(key, this.table.length);
    const pair: keyPair<T> = [key, value];
    if (this.table[index]) {
      this.table[index].push(pair);
    } else {
      this.table[index] = [pair];
    }
  };

  getItem = (key: string) => {
    const index = hashStringtoInt(key, this.table.length);
    return this.table[index].find((x) => x[0] === key)?.[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.setItem("birthday", "100");
myTable.setItem("house", "humungous");
myTable.getItem("lastName");
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
