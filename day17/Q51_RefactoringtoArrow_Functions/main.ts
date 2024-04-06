// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

//original function
function calculateArea(length: number, width: number) {
  
     return length * width;
}

console.log(calculateArea(5, 10)); // output should be 50

// Refactored Arrow Function
let  refactoredCalculateArea = (length: number, width: number) => width * length

console.log(refactoredCalculateArea(5, 10));  // output should be 50



