const people = [
  { name: "Wes", age: 31 },
  { name: "John", age: 21 },
  { name: "Raj", age: 21 },
  { name: "Alex", age: 25 },
];
console.log(people.find((person) => person.age === 21));
