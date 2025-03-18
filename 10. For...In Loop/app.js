let person = { name: "John", age: 30, weight: 70 };
for (let n in person) {
  console.log(n, person[n]);
}

let list = ["one", "two", "three", "four"];
for (let keys in list) {
  console.log(`Index: ${keys} Value: ${list[keys]}`);
}
