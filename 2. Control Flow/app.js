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

// const age = 21;
// if (age > 18) {
//   console.log("You are eligible to vote");
// } else if (age >= 18 && age <= 21) {
//   console.log("You can still vote");
// } else {
//   console.log("You are not eligible for voting");
// }

// switch (expression) {
// case x:
// print
// break;
// case y:
// print
// break;
// }

// let x = 0;
// let bulb;
// switch (x) {
//   case 0:
//     bulb = "offf";
//     break;
//   case 1:
//     bulb = "On";
//     break;
//   default:
//     bulb = "Nothing";
// }
// console.log(bulb);

// let fruit = "Orange";

// switch (fruit) {
//   case "Banana":
//     console.log("Banana is yellow");
//     break;
//   case "Orange":
//     console.log("Orange is orange");
//     break;
//   case "Apple":
//     console.log("Apple is red");
//     break;
//   default:
//     console.log("I have no idea what fruit is this");
// }

// Loops

// for loop syntax
// for (intitalExpression; condition; incrementExpression) {
// code block to be executed
// }
let i = 0;
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

do {
  console.log("Do loop executed");
} while (i < 5);
{
  console.log("While loop executed");
}
