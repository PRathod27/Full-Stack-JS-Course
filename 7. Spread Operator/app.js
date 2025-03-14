// function giveme4(a, b, c, d) {
//   console.log(`Value of a is ${a}`);
//   console.log(`Value of b is ${b}`);
//   console.log(`Value of b is ${c}`);
//   console.log(`Value of d is ${d}`);
// }

// const color = [red, green, blue, yellow];

// giveme4(...color);

const obj1 = { x: 10, y: 20 };
const obj2 = { z: 30 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
