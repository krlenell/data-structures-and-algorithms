function hashStringtoInt(s: string, tableSize: number): number {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (7 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable<T> {
  table = new Array(100);

  setItem = (key: string, value: string) => {
    const index = hashStringtoInt(key, this.table.length);
    this.table[index] = value;
  };

  getItem = (key: string) => {
    const index = hashStringtoInt(key, this.table.length);
    return this.table[index];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.getItem("lastName");
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
