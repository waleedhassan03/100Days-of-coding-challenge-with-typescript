// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician = ["Harry Potter", "Silvester", "Tom", "Jerry"];
function show_magicians(magicians$) {
    magicians$.forEach(famousMagicians => {
        console.log(famousMagicians);
    });
}
show_magicians(magician);
export {};
