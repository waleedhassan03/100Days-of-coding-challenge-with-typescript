// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Array of objects with different laptop details
let laptops = [
    { name: "lenovo", model: "X1 Carbon", year: 2022 },
    { name: "Dell", model: "Latitude", year: 2020 },
    { name: "HP", model: "Elite Book", year: 2023 }
];
// Destructuring the array assigning the firstLaptop and secondLaptop varibales
let [firstLaptop, secondLaptop,] = laptops;
// now console these varibales that you have selected in destructuring only these two laptops will be printed not third one
console.log(firstLaptop);
console.log(secondLaptop);
export {};
