"use strict";
// Q22 : Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let newArray = ["Sir zia khan", "Imran khan", "Daniyal nagori"];
// here i am accessing name which is at index 5 from array which is not in our index so this will give error
console.log(newArray[5]); // incorrect
// this is correct and here i am accessing the name which is at index 2 and we have 0,1,2 index in this message
console.log(newArray[2]); // correct
