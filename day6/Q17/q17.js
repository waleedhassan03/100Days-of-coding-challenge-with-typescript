"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestsName = ["Elon Musk", "Mukesh Ambani", "Bill Gates"];
let absentGuest = "Bill Gates";
let newGuest = "Mark zuckerberg";
guestsName[3] = newGuest;
// for (let i = 0; i < guestsName.length; i++) {
//     console.log("Hey! " + guestsName[i] + ",  You are invited for a dinner tonight at my home ?");
// }
console.log(` Mr. ${absentGuest} is not comming for dinner.`);
// adding more guests to my home in the above list
console.log("\nsurprisingly! we found a bigger dinner table today. Now we can invite more people.");
//here i have added 3 new guests
guestsName.unshift("Bernard Arnault"); //with unshift function. This name will be placed at first index
guestsName.splice(2, 0, "Barak Obama"); //this will be placed at the 2nd index becausae we have given 2 number in the code
guestsName.push("Imaran khan"); // for Push function. The name will be placed at the end of index
//all guests are invited here 
for (let i = 0; i < guestsName.length; i++) {
    console.log("Hey! " + guestsName[i] + ",  You are invited for a dinner tonight at my home ?");
}
// printed sorry msg to the guests for not inviting
console.log("\nsorry! we have been informed that the dinner table will not arrive in time so we can invite only 2 people");
// i have removed all guests except 2 people 
while (guestsName.length > 2) {
    let reomovedGuests = guestsName.pop();
    console.log(`Sorry dear. ${reomovedGuests}, You are not invited for dinner`);
}
//here i have invited only 2 remaining guests 
for (let i = 0; i < guestsName.length; i++) {
    console.log("\nDear Mr. " + guestsName[i] + " You are still invited for dinner");
}
//here i have removed last 2 guests and printed empty space in result
guestsName.splice(0, 2);
console.log(guestsName);
