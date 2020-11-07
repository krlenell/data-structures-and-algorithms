function hashStringtoInt(s: string, tableSize: number): number {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (17 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

type keyPair = [string, unknown];

class HashTable<T> {
  table = new Array(17);

  setItem = (key: string, value: unknown) => {
    const index = hashStringtoInt(key, this.table.length);
    const pair: keyPair = [key, value];
    if (this.table[index]) {
      this.table[index].push(pair);
    } else {
      this.table[index] = [pair];
    }
  };

  getItem = (key: string) => {
    const index = hashStringtoInt(key, this.table.length);
    return this.table[index].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "tim");
myTable.getItem("lastName");
console.log(myTable.table);
console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
