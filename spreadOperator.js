// Spread Operator (...): 
// Usage: Used to split an array into individual elements or to spread elements as separate arguments. Array Usage: Spreads the elements of an array. 
// Function Call Usage: Spreads array elements as separate arguments.

const numbers = [1, 2, 3, 4];

// Spreading an array
const copiedNumbers = [...numbers]; // Creates a copy of 'numbers'

// Spreading array elements as function arguments
function displayNumbers(a, b, c, d) {
  console.log(a, b, c, d);
}

displayNumbers(...numbers); // Output: 1 2 3 4
