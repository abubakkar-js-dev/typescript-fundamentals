/**
 * Typed return values,
 * Optional parameters,
 * Default parameters,
 * Rest parameters,
 * Overloaded functions,
 * Function types,
 * Generic functions,
 * Function expressions,
 * Arrow functions,
 * Higher-order functions,
 * Recursive functions,
 * Curried functions,
 * Partial application,
 * Partial application,
 */

// Typed return values
const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 2));

// Optional parameters
const greet = (name: string, age?: number): string => {
  return `Hello, ${name}!`;
};

console.log(greet("John"));
console.log(greet("John", 30));

// Default parameters
const greet2 = (name: string, age: number = 20): string => {
  return `Hello, ${name}!`;
};

console.log(greet2("John"));
console.log(greet2("John", 30));

// Rest parameters
const sum2 = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(sum2(1, 2, 3, 4, 5));

// Overloaded functions

class Calculator {
  // Overloaded method signatures
  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;

  // Implementation
  add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2));
console.log(calculator.add(1, 2, 3));
