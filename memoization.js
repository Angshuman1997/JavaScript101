// Memoization is a technique to optimize function performance by caching the results of expensive function calls and reusing them when the same inputs occur again. It helps avoid redundant computations, making functions faster.

// Without Memoization

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5

// With memoization, you can store calculated results in a cache for reuse:

// With Memoization
function fibonacciMemoized() {
  const cache = {};

  function fib(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 1) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}

const fibMemo = fibonacciMemoized();
console.log(fibMemo(5)); // Output: 5
