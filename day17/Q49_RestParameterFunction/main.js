// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
//function with rest parameters ...
function myHobbies(...manyhobbies) {
    // iterate each hobby using for of loop
    for (let hobbies of manyhobbies) {
        //console the hobby with below statement
        console.log(`You enjoy ${hobbies}`);
    }
}
;
// here you can write as many as arguments as you want because we have rest parametrs in above function
myHobbies("Coding", "Swimming", "Travelling", "Reading Islamic History");
export {};
