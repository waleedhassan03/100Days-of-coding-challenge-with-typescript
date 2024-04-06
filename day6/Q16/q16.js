"use strict";
// Question16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestsName = ["Elon Musk", "Mukesh Ambani", "Bill Gates"];
let absentGuest = "Bill Gates";
let newGuest = "Mark zuckerberg";
guestsName[3] = newGuest;
for (let i = 0; i < guestsName.length; i++) {
    console.log("Hey! " + guestsName[i] + ",  You are invited for a dinner tonight at my home ?");
}
console.log(` Mr. ${absentGuest} is not comming for dinner.`);
// adding more guests to my home in the above list
console.log("surprisingly! we found a bigger dinner table today. Now we can invite more people.");
guestsName.unshift("Bernard Arnault"); //with unshift function. This name will be placed at first index
guestsName.splice(2, 0, "Barak Obama"); //this will be placed at the 2nd index becausae we have given 2 number in the code
guestsName.push("Imaran khan"); // for Push function. The name will be placed at the end of index
for (let i = 0; i < guestsName.length; i++) {
    console.log("Hey! " + guestsName[i] + ",  You are invited for a dinner tonight at my home ?");
}
