// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let trasport: string[] = ['Rolls Royce', 'Private jet', 'Tesla luxury car', 'Automatic flying drone'];

for(let i=0;  i<trasport.length; i++){
    
    console.log('I would like to own a ' +trasport[i] )
}


// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestsName: string[] = ["Elon Musk", "Jef Bezos", "Mukesh Ambani", "Bill Gates"];
for(let i=0; i<guestsName.length; i++){
    console.log("Hey! " + guestsName[i] +  ", Will you join me for a dinner tonight at my home ?")
}


// Question 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let absentGuest = "Bill Gates"

let newGuest = "Mark zuckerberg";

guestsName[3] = newGuest;

for(let i=0; i<guestsName.length; i++){
    console.log("Hey! " + guestsName[i] +  ",  You are invited for a dinner tonight at my home ?")
}

console.log(` Mr. ${absentGuest} is not comming for dinner.`);
