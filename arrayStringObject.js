// Array Methods

const numbers = [1, 2, 3];

// Manipulation

numbers.push(4);    // Adds 4 to the end
numbers.pop();      // Removes the last element (4)
numbers.unshift(0); // Adds 0 to the beginning
numbers.shift();    // Removes the first element (0)

const combinedArray = numbers.concat([5, 6]); // Combines arrays
const slicedArray = numbers.slice(1, 3);      // Extracts [2, 3]
numbers.splice(1, 1, 7, 8); // Removes 1 element at index 1, adds 7 and 8

// Iteration

numbers.forEach(function(num) {
  console.log(num); // Output: 1, 2, 3
});

const squaredNumbers = numbers.map(function(num) {
  return num * num; // Returns [1, 4, 9]
});

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0; // Returns [2]
});

const sum = numbers.reduce(function(acc, num) {
  return acc + num; // Returns 6
}, 0);

// Searching and Indexing

const index1 = numbers.indexOf(2);      // Returns 1
const lastIndex2 = numbers.lastIndexOf(2); // Returns 3
const firstEven = numbers.find(function(num) {
  return num % 2 === 0; // Returns 2
});

const firstEvenIndex = numbers.findIndex(function(num) {
  return num % 2 === 0; // Returns 1
});

// Object Methods

const person = { name: "Alice",  age: 30,  job: "Engineer"};

// Property Access

const keys = Object.keys(person);    // Returns ["name", "age", "job"]
const values = Object.values(person); // Returns ["Alice", 30, "Engineer"]
const entries = Object.entries(person); // Returns [["name", "Alice"], ["age", 30], ["job", "Engineer"]]

// String Methods

const message = "Hello, World!";

// Manipulation

const newMessage = message.concat(" Welcome!"); // Concatenation
const words = message.split(" ");               // Splits into ["Hello,", "World!"]
const substring = message.substring(0, 5); // Returns "Hello"
const substr = message.substr(7, 5);      // Returns "World"

// Searching and Indexing

const sentence = "This is a sample sentence.";
const index = sentence.indexOf("sample");    // Returns 10
const lastIndex = sentence.lastIndexOf("is"); // Returns 5
const includesWord = sentence.includes("a");  // Returns true

// Transformation

const text = "   Trim me!   ";
const upperCaseText = text.toUpperCase();   // Returns "   TRIM ME!   "
const lowerCaseText = text.toLowerCase();   // Returns "   trim me!   "
const trimmedText = text.trim();            // Returns "Trim me!"
