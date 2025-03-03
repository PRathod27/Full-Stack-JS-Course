// Type Conversion

// 1. String to number
const money = "50";
// parseInt() - converts string to integer
console.log(typeof parseInt(money)); // Output: number

// 2. Number to string
const num = 50;
// toString() - converts number to string
console.log(typeof num.toString()); // Output: string

// 3. String to float
const floatnum = "50.44";
// parseFloat() - converts string to float
console.log(typeof parseFloat(floatnum)); // Output: number

// Conditional Statements

// 1. if else
// Syntax
// if (condition) {
//   code block to be executed
// } else if (condition) {
//   code block to be executed
// } else {
//   code block to be executed
// }

const age = 21;
if (age > 18) {
  console.log("You are eligible to vote");
} else if (age >= 18 && age <= 21) {
  console.log("You can still vote");
} else {
  console.log("You are not eligible for voting");
}

// switch (expression) {
// case x:
// print
// break;
// case y:
// print
// break;
// }

let x = 0;
let text;
switch (x) {
  case 0:
    text = "offf";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "Nothing";
}

console.log(text);
