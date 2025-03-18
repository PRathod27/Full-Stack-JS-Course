const numbers = [1, 2, 3, 4, 5];

function myFunction(num) {
  return num * 10;
}

const newArray = numbers.map(myFunction);
console.log(newArray);
