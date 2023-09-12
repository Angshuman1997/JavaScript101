// A Promise in JavaScript is an object representing the 
// eventual completion or failure of an asynchronous operation.

// Promises provide a structured way to handle asynchronous tasks, 
// making the code more readable and avoiding the callback hell, 
// also known as the pyramid of doom.

// Promises have three states:

// Pending: The initial state, indicating that the asynchronous 
// operation is ongoing and hasn't been completed yet.
// Fulfilled: The state when the asynchronous operation successfully 
// completes, resulting in a value.
// Rejected: The state when the asynchronous operation encounters an 
// error or fails, resulting in an error reason.

// Creating a Promise:

const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  const operationSuccessful = true; // Replace with your actual condition
  if (operationSuccessful) {
    resolve("Success!"); // Fulfill the promise
  } else {
    reject("Error!"); // Reject the promise
  }
});

// Using Promises:

myPromise
  .then((result) => {
    console.log(result); // Output: "Success!"
  })
  .catch((error) => {
    console.error(error); // Output: "Error!"
  });

// Chaining Promises:
// Promises can be chained to perform a sequence of asynchronous operations:

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    // Simulate fetching user data
    const userData = { name: "John", id: 1 }; // Replace with your actual data or API call
    if (userData) {
      resolve(userData);
    } else {
      reject("User not found");
    }
  });
};

const fetchPosts = (user) => {
  return new Promise((resolve, reject) => {
    // Simulate fetching posts data for the user
    const postsData = [{ title: "Post 1" }, { title: "Post 2" }]; // Replace with your actual data or API call
    if (postsData) {
      resolve(postsData);
    } else {
      reject("Posts not found");
    }
  });
};

fetchUser()
  .then((user) => fetchPosts(user))
  .then((posts) => {
    console.log("User:", user);
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error(error);
  });
