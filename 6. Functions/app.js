for (let i = 0; i < 5; i++) {
  console.log(i);
}

function greet() {
  return `Hello ${person.name} and age is ${person.age}`;
}

const person = {
  name: "John",
  age: 25,
  greet,
};

console.log(person.greet());
