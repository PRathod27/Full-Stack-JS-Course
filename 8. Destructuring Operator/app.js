const [a, [...b], ...c] = [
  1,
  [2, 3, 4, 5],
  {
    x: 10,
    y: 20,
  },
];
console.log(b);
console.log(c);
