// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ["Harry Potter", "Silvester", "Tom", "Jerry"];
function copyArray(newArray) {
    return [...newArray];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians$) {
    magicians$.forEach(famousMagicians => {
        console.log(famousMagicians);
    });
}
let copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log("\n\nThis is my origianl array");
show_magicians(magician);
console.log("\n\nThis is my modified copy of array");
show_magicians(copyMagicianArray);
export {};
