// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myName = "waleed hassan";
console.log(myName.toLowerCase());  // this name will be printed in small letters

console.log(myName.toUpperCase());  // this name will be printed in capital letters

console.log(myName.charAt(0).toUpperCase()+myName.slice(1).toLowerCase());
// this will be displayed as first letter of word with capital letter and remaining with small letter