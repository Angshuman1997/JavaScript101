// Callback hell, also known as the "pyramid of doom," refers to a situation in asynchronous 
// programming where multiple nested callbacks make the code hard to read, understand, and maintain. 
// It often occurs when dealing with multiple asynchronous operations that depend on each other's results.

// Example:

// asyncOperation1(function(result1) {
//   asyncOperation2(result1, function(result2) {
//     asyncOperation3(result2, function(result3) {
//       asyncOperation4(result3, function(result4) {
//         // More nested callbacks...
//       });
//     });
//   });
// });

// Callback hell can lead to several issues like - Readability, Maintainability, Error Handling

// To mitigate callback hell, you can use techniques such as:

// Simulating asynchronous functions that return Promises
function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 1: Doing something");
      resolve("Result from doSomething");
    }, 1000);
  });
}

function doSomethingElse(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 2: Doing something else with", previousResult);
      resolve("Result from doSomethingElse");
    }, 1000);
  });
}

function doAnotherThing(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 3: Doing another thing with", previousResult);
      resolve("Result from doAnotherThing");
    }, 1000);
  });
}

// Chaining the promises to mitigate callback hell
doSomething()
  .then((result1) => {
    return doSomethingElse(result1);
  })
  .then((result2) => {
    return doAnotherThing(result2);
  })
  .then((result3) => {
    console.log("All tasks completed with result:", result3);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Using async/await to mitigate callback hell
async function doTasks() {
  try {
    const result1 = await doSomething();
    const result2 = await doSomethingElse(result1);
    const result3 = await doAnotherThing(result2);
    console.log("All tasks completed with result:", result3);
  } catch (error) {
    console.error("Error:", error);
  }
}

doTasks();
