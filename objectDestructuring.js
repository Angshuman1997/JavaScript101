// Object destructuring is a feature in JavaScript that allows you to 
// extract properties from objects and assign them to variables in a 
// more concise and convenient way.

// Example 1:
// Creating an object
const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
};

// Using object destructuring to extract properties
function exp1() {
  const { firstName, lastName, age } = person;

  console.log(firstName); // Output: Alice
  console.log(lastName); // Output: Smith
  console.log(age); // Output: 30
}
exp1();

// Example 2:
const { firstName: fName, lastName: lName } = person;

console.log(fName); // Output: Alice
console.log(lName); // Output: Smith

// Example 3:
function getPerson() {
  return {
    firstName: "Bob",
    lastName: "Johnson",
    age: 25,
  };
}

const { firstName, age } = getPerson();
console.log(firstName); // Output: Bob
console.log(age); // Output: 25

// Example 4:
const { city = "Unknown" } = person;
console.log(city); // Output: Unknown
