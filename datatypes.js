// Primitive Data Types
// These are immutable and stored directly in memory.

// 1. Number
const num = 42; // Example of a number

// 2. String
const str = "Hello, world!"; // Example of a string

// 3. Boolean
const isTrue = true; // Example of a boolean (true)
const isFalse = false; // Example of a boolean (false)

// 4. Undefined
let undefinedVar; // Example of an undefined variable

// 5. Null
const nullValue = null; // Example of a null value

// 6. Symbol
const uniqueSymbol = Symbol("description"); // Example of a unique symbol

// Non-Primitive (Reference) Data Types
// These are mutable and reference values stored indirectly.

// 1. Object
const person = {
  firstName: "John",
  lastName: "Doe",
}; // Example of an object

// 2. Array
const numbers = [1, 2, 3, 4, 5]; // Example of an array

// 3. Function
function greet(name) {
  return `Hello, ${name}!`;
} // Example of a function

// 4. Date
const currentDate = new Date(); // Example of a Date object

// 5. Regular Expression
const regex = /[a-z]+/; // Example of a regular expression

// 6. Custom Objects (instances of user-defined classes)
class Person {
  constructor(name) {
    this.name = name;
  }
}
const personObj = new Person("Alice"); // Example of a custom object

// 7. Arrays of Objects
const employees = [
  { name: "Alice", role: "Manager" },
  { name: "Bob", role: "Developer" },
]; // Example of an array of objects

// 8. Functions as Objects (First-class functions)
const add = function (a, b) {
  return a + b;
}; // Example of a function stored in a variable

// 9. JSON (JavaScript Object Notation)
const jsonExample = '{"key": "value"}'; // Example of JSON data

// Note: Non-primitive data types reference memory locations, and changes in one variable can affect others that reference the same data.

console.log(num);
console.log(str);
console.log(isTrue, isFalse);
console.log(undefinedVar);
console.log(nullValue);
console.log(uniqueSymbol);
console.log(person);
console.log(numbers);
console.log(greet("Alice"));
console.log(currentDate);
console.log(regex.test("abc"));
console.log(personObj);
console.log(employees);
console.log(add(5, 3));
console.log(JSON.parse(jsonExample));
