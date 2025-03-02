// Type Conversion
// 1. String to number
let money = "50";
// parseInt() - converts string to integer
console.log(typeof parseInt(money));

// 2. Number to string
let num = 50;
// toString() - converts number to string
console.log(typeof num.toString());

// String to float
let floatnum = "50.44";
// parseFloat() - converts string to float
console.log(typeof parseFloat(floatnum));

// Conditional Statements

// 1. if else
// Syntax
// if (condition) {
//   code block will execute if condition is true
// } else {
//   code block will execute if condition is false
// }
let age = 21;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
