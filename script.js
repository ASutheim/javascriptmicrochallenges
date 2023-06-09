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

// # Array Checkpoint
// Create a function that takes in an array. Add up the first and last values in the array.

let anArray = [9, 7, 24, 13, 512, 11, 46];

function firstPlusLast(array) {
  let result = array[0] + array[array.length - 1];
  return result;
}

console.log(
  `Check of firstPlusLast function, should say 55:`,
  firstPlusLast(anArray)
);

// # Loops, Arrays, and Concatenation Checkpoint
// Create a function that takes two parameters.
// The first parameter is an array, the second parameter will be a number.

// Your function should return a string that combines all of the values
// starting at the index of the number passed in through the end of the array.

function saySomethingSilly(array, number) {
  let sillyPhrase = "";
  for (i = number; i < array.length; i++) {
    sillyPhrase += array[i];
  }
  return sillyPhrase;
}

let sillyWords = ["blob", "stinker", "warble", "glabrous", "stipple", "chump"];

console.log(
  "Test of saySomethingSilly function:",
  saySomethingSilly(sillyWords, 3)
);

// # Looping through an Array of Objects Checkpoint

// Create a function that takes in an array of employee objects. Each employee object will come in with a property called `yearsOfExperience`.
// Your function should return the total years of experience for all of the employees.

let employeeInfo = [
  { name: "Tony", yearsOfExperience: 10 },
  { name: "Carla", yearsOfExperience: 4 },
  { name: "Kris", yearsOfExperience: 14 },
];

function totalYearsExp(array) {
  let cumulativeYears = 0;
  for (employee of array) {
    cumulativeYears += employee.yearsOfExperience;
  }
  return cumulativeYears;
}

console.log(
  "Test of totalYearsExp function, should say 28:",
  totalYearsExp(employeeInfo)
);

// # Loops and Two Dimensional Arrays Checkpoint
// Create a function that takes in an array of arrays. Add up all of the numbers in all of the arrays and return the value.

console.log("Too sleepy, time to go to bed. Another time!");
