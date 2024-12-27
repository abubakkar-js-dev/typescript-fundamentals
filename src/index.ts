import "./array.js";
import "./object.js"
import "./func.js"

export function aggregateArray(arr: number[]) {
  return {
    sum: arr.reduce((acc, val) => acc + val, 0),
    average: arr.reduce((acc, val) => acc + val, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

// Example object with different data types
const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "coding", "hiking"],
  address: {
    street: "123 Main St",
    city: "Boston",
    country: "USA",
  },
  isActive: true,
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(aggregateArray(numbers));
// console.log(person);

// console.log(numbers3);
