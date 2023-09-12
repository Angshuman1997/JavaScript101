// In JavaScript, functions are blocks of code that can be defined, reused, and executed. They allow you to encapsulate functionality and make your code more modular and readable. There are several types of functions in JavaScript, each serving a different purpose.

// Function Declarations:
// A standard way to define a named function. Can be used before they are defined due to hoisting.

function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8

// Function Expressions:
// Define a function and assign it to a variable. The function can be anonymous (without a name) or have a name.

const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 2)); // Output: 8

// Arrow Functions:
// A concise way to define functions using the arrow (=>) syntax. Automatically bind this to the surrounding context.

const divide = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5

// IIFE (Immediately Invoked Function Expression):
// A function that is defined and executed immediately after its creation. Often used to create a private scope for variables.

(function () {
  const secret = "I'm hidden";

  console.log(secret); // Output: I'm hidden
})();

// console.log(secret); // Error: secret is not defined

// Higher-Order Functions:
// Functions that take one or more functions as arguments or return a function. Common in functional programming and for creating abstractions.

function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(8, 4, (x, y) => x - y);
console.log(result); // Output: 4

// Callback Functions:
// Functions passed as arguments to other functions, which are then called when certain actions are completed.

function fetchData(callback) {
  // Simulating data fetching
  setTimeout(() => {
    const data = "Fetched data";
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log(result); // Output: Fetched data
});

// Anonymous Functions:
// Functions without a name. Often used as callback functions or when a function is used just once.

setTimeout(function () {
  console.log("Delayed message");
}, 2000);

// Generator Functions:
// Functions that can be paused and resumed, yielding multiple values over time.

function* countTo(limit) {
  for (let i = 1; i <= limit; i++) {
    yield i;
  }
}

const counter = countTo(5);
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2

// First-Class Functions:
// In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as numbers, strings, or objects. They can be assigned to variables, passed as arguments to other functions, and returned from functions.

const greet = function (name) {
  return "Hello, " + name;
};

const message = greet("Alice");
console.log(message); // Output: Hello, Alice

// First-Order Functions:
// A first-order function is a function that doesn't take any other functions as arguments or return a function as its result. Most basic functions in JavaScript are first-order functions.

function square(x) {
  return x * x;
}

console.log(square(4)); // Output: 16
