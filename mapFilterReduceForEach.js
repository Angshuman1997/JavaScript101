// map:
// The map method is used to create a new array by applying a function to each element 
// of an existing array. It transforms each element and returns a new array of the same length.

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

// squaredNumbers will be [1, 4, 9, 16]

// filter:
// The filter method is used to create a new array containing only the elements 
// that pass a given test (provided as a function).

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(function (num) {
  return num % 2 === 0;
});

// evenNumbers will be [2, 4, 6]

// reduce:
// The reduce method is used to reduce an array to a single value by applying a 
// function on each element and accumulating the result. It iterates over the 
// array and "reduces" it to a final value.

const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce(function (acc, num) {
  return acc + num;
}, 0);

// sum will be 10 (1 + 2 + 3 + 4)

// forEach:
// The forEach method iterates through each element of an array and executes 
// a function for each element. It's used for side effects and doesn't return a new array.

const names = ["Alice", "Bob", "Charlie"];
names.forEach(function (name) {
  console.log("Hello, " + name);
});
// Output: Hello, Alice
//         Hello, Bob
//         Hello, Charlie
