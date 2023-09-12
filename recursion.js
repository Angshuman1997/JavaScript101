// Recursion is when a function calls itself to solve a problem by 
// breaking it down into smaller instances of the same problem.

function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  
  // Recursive case: multiply n by factorial of (n - 1)
  return n * factorial(n - 1);
}

// Calculate the factorial of 5
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
