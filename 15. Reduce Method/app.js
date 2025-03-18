const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((p, c) => {
  return p + c;
}, 0);

console.log(sum);
