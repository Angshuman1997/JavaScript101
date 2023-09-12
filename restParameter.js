// Rest Parameter (...): 
// Usage: Used in function parameter lists to collect remaining arguments into an array. 
// Function Definition: Collects arguments into an array.

function sum(...numbers) {
  // 'numbers' is an array containing all passed arguments
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
