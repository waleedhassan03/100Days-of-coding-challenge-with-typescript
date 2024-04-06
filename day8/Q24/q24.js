"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Tests for equality and inequality with strings
console.log("Equality tests with strings: ", "Apple" == "Apple"); //true
console.log("InEquality tests with strings: ", "Apple" == "Banana"); //false
// Tests using the lower case function
console.log(":Lower case function test: ", "MANGO".toLowerCase() == "mango"); //true
console.log(":Lower case function test: ", "INDIA".toLowerCase() == "INDIA"); //false
// Numerical tests involving equality and inequality
console.log("Equality test wuth numbers: ", 10 === 10); //true
console.log("InEquality test wuth numbers: ", 10 != 10); //false
// greater than and less than test
console.log("Greater than test: ", 100 > 50); //true
console.log("less than test: ", 100 < 50); //false
// greater than or equal to, and less than or equal to
console.log("Greater than or equal to test: ", 50 >= 50); //true
console.log("Less than or equal to test: ", 100 <= 50); //false
// Tests using "and" and "or" operators
console.log("And operator test: ", 5 === 5 && 10 > 5 && 20 > 10); // it will return true
console.log("And operator test: ", 5 === 5 && 10 > 5 && 0 > 1); // it will return false  && operator always finds for false
console.log("OR operator test: ", 5 === 5 || 10 > 5 || 20 > 10); // it will return true
console.log("OR operator test: ", 5 != 5 || 10 < 5 || 20 > 10); // it will return true || operator always looks for true 
// Test whether an item is in a array
let cars = ["Tesla", "Mercedes Benz", "BMW"];
console.log("is 'Tesla present in the cars ?'", cars.includes("Tesla")); //ture
//Test whether an item is not in a array
console.log("is 'Ferrari present in the cars ?'", cars.includes("Ferrari")); //false
