"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["USA", "Germay", "Iran", "Australia", "Japan"];
// • Print your array in its original order.
console.log("original order = " + places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order = " + [...places].sort()); //3 dots will make copy of origianl message and sort function will make them in alphabetical order
// • Show that your array is still in its original order by printing it.
console.log("original order = " + places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order = " + [...places].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original order = " + places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order = " + places.reverse()); //after variable name use .reverse function to reverse the  order of your message. it means the last one will be placed at first and second last in second place likewise...
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original order = " + places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order = " + places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabetical order = " + places.sort().reverse());
