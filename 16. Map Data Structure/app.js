const map = new Map();

const keyOne = "huxn";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of keyOne");
map.set(keyTwo, "Value of KeyTwo");
map.set(keyThree, "Value of keyThree");

console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);

for (let [key, value] of map) {
  console.log(key, "---", value);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let key of map.values()) {
  console.log(key);
}
