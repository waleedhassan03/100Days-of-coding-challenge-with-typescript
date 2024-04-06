// Q10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


//waleed hassan
// date: 9/3/2024

let cityName: string = "Nawabshah";
console.log(`I live in ${cityName} city`);

// Q11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friendsNmaes = ["waleed", "Asad", "Ahsan", "Waqar", "Zubair"];

for(let j = 0; j < friendsNmaes.length; ++j){
    console.log(friendsNmaes[j]);
}

// Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friends = ["waleed", "Asad", "Ahsan", "Waqar", "Zubair"];

let message = ": Are you travelling to Malaysia next week ?";

for(let j = 0; j < friends.length; ++j){
    console.log(friendsNmaes[j] + message);
}





