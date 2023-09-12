// for Loop: 
// The for loop is used to iterate over a sequence of values or elements for a specific number of times.

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// while Loop: 
// The while loop continues to execute a block of code as long as a given condition is true.

let j = 0;
while (j < 5) {
  console.log(j); // Output: 0, 1, 2, 3, 4
  j++;
}

// do...while Loop: 
// The do...while loop is similar to the while loop, but it ensures that the block of code is executed at least once before checking the condition.

let i = 0;
do {
  console.log(i); // Output: 0
  i++;
} while (i < 0);


// for...of Loop: 
// The for...of loop is used to iterate over the values of an iterable object (arrays, strings, etc.).

const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color); // Output: red, green, blue
}

// for...in Loop: 
// The for...in loop is used to iterate over the properties of an object.

const person = { name: "Alice", age: 30 };
for (const key in person) {
  console.log(key, person[key]); // Output: name Alice, age 30
}
