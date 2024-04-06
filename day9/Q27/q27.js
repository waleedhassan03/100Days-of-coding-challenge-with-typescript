"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 27-26 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//for the green alien
let alienColour = "green";
if (alienColour === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColour === "Yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColour === "red") {
    console.log("Player earned 15 points.");
}
//for the yellow alien
alienColour = "yellow";
if (alienColour === "yellow") {
    console.log("Player earned 10 points.");
}
else if (alienColour === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColour === "red") {
    console.log("Player earned 15 points.");
}
//for the red alien
alienColour = "red";
if (alienColour === "red") {
    console.log("Player earned 15 points.");
}
else if (alienColour === "green") {
    console.log("Player earned 5 points.");
}
else if (alienColour === "yellow") {
    console.log("Player earned 10 points.");
}
