const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

// 1. Using the Push() method
fruits.push("watermelon");
console.log(fruits);

// 2. Using the Pop() method
fruits.pop();
console.log(fruits);

// 3. Using the Shift() method
fruits.shift();
console.log(fruits);

// 4. Using the Unshift() method
fruits.unshift("apple");
console.log(fruits);

// 5. Using the concat() method

const moreFruits = ["kiwi", "lemon", "mango"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);

// join, reverse, slice
const pl = ["JavaScript", "Python", "Ruby", "Java"];
console.log(pl.join("-"));
console.log(pl.reverse());
console.log(pl.slice(0, 2));
