// # Addition Checkpoint

// Create a function that takes two numbers. Your function should return the sum of the two numbers passed in.

function addTwo(num1, num2) {
  let result = num1 + num2;
  return result;
}

console.log(`Checking addTwo function. 3+5 = ? Answer:`, addTwo(3, 5));

// Conditional Checkpoint
// Create a function that takes two numbers.

// If the first number is bigger than the second number, return `"The first number was bigger!"`.
// If the second number is bigger than the first number, return `"The second number was bigger!"`.
// If the numbers are the same, return `"The numbers are the same!"`.

function compareTwo(num1, num2) {
  if (num1 > num2) {
    return `The first number was bigger!`;
  }
  if (num1 < num2) {
    return `The second number was bigger!`;
  }
  if (num1 === num2) {
    return `The numbers are the same!`;
  }
}

console.log(
  `Checking compareTwo function. Which is bigger, 27 or 53? Answer:`,
  compareTwo(27, 53)
);
