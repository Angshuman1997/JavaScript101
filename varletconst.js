// var, let and const

// var

// The older way of declaring variables. 
// Function-scoped and hoisted. 
// Can be redeclared and reassigned.

var age = 30;
if (true) {
  var age = 25; // Reassigns the global variable
}
console.log(age); // Output: 25

// let

// Introduced in ES6 (ECMAScript 2015). 
// Block-scoped and hoisted. 
// Cannot be redeclared, but can be reassigned.

let count = 5;
if (true) {
  let count = 10; // Creates a new block-scoped variable
}
console.log(count); // Output: 5

// const

// Introduced in ES6. 
// Block-scoped and hoisted. 
// Cannot be redeclared or reassigned after initial assignment.

const pi = 3.14159; // pi = 3.14; // Error: Cannot reassign const variable