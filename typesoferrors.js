// Syntax Error
const x = 5
// Missing semicolon

// Reference Error
console.log(y); // ReferenceError: y is not defined
// Attempting to use an undeclared variable 'y'

// Type Error
const a = 10;
a.toUpperCase(); // TypeError: a.toUpperCase is not a function
// Calling 'toUpperCase()' on a number, which is not a string

// Range Error
const arr = [1, 2, 3];
console.log(arr[5]); // RangeError: Index out of range
// Accessing an index that doesn't exist in the array

// Custom Error
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error.");
} catch (error) {
  console.error(error); // Outputs: CustomError: This is a custom error.
}
// Creating and throwing a custom error

// Promise Rejection Error
const promise = new Promise((resolve, reject) => {
  reject("Promise rejected");
});

promise.catch((error) => {
  console.error(error); // Outputs: Promise rejected
});
// Handling a promise rejection error
