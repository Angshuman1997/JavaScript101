// Scope in JavaScript refers to the context in which variables are declared and accessed. It defines where a particular variable is available for use in your code. JavaScript has three main types of scope: global scope, function scope, and block scope.

// Global Scope
// Variables declared outside of any function or block have global scope. They can be accessed from any part of the code, including within functions or blocks.

var globalVar = "I'm global"; // Global scope
function exampleFunction1() {
  console.log(globalVar); // Accessible inside the function
}
console.log(globalVar); // Accessible outside the function

// Function Scope
// Variables declared within a function have function scope. They are only accessible within the function in which they are declared.

function exampleFunction2() {
  var localVar = "I'm local"; // Function scope
  console.log(localVar); // Accessible inside the function
}
// console.log(localVar); // Error: localVar is not accessible here

// Block Scope
// Variables declared with let and const have block scope. They are accessible within the block (curly braces) in which they are defined.

if (true) {
  let blockVar = "I'm block-scoped"; // Block scope
  console.log(blockVar); // Accessible inside the block
}
// console.log(blockVar); // Error: blockVar is not accessible here

// Scope Chain
// Scope Chain refers to the hierarchy of nested functions or blocks and their respective scopes. When a variable is accessed, JavaScript first checks the current scope, and if not found, it looks up the scope chain until it finds the variable or reaches the global scope. 

var outerVar = "I'm outer";
function outerFunction() {
  var middleVar = "I'm middle";
  function innerFunction() {
    var innerVar = "I'm inner";
    console.log(outerVar, middleVar, innerVar); // All variables accessible
  }
  innerFunction();
  // console.log(innerVar); // Error: innerVar not accessible here
}
outerFunction();
// console.log(middleVar); // Error: middleVar not accessible here
