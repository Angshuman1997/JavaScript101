// In JavaScript, you can create shallow and deep copies of objects. A shallow copy 
// duplicates the top-level properties of an object, while a deep copy duplicates both
//  the top-level properties and all nested properties, creating completely independent copies.

// Shallow Copy Example:

// Original object
const original = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

// Using the spread operator to create a shallow copy
const shallowCopy = { ...original };

// Modifying the shallow copy
shallowCopy.name = "Alice";
shallowCopy.address.city = "New City";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);

// Deep Copy Example:

// Using a custom deep copy function
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj; // Return non-objects as is
  }

  // Create an empty object with the same prototype as the original
  const newObj = Object.create(Object.getPrototypeOf(obj));

  // Iterate through the original object's properties and recursively copy them
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }

  return newObj;
}

// Creating a deep copy
const deepCopyObj = deepCopy(original);

// Modifying the deep copy
deepCopyObj.name = "Bob";
deepCopyObj.address.city = "Another New City";

console.log("Original:", original);
console.log("Deep Copy:", deepCopyObj);
