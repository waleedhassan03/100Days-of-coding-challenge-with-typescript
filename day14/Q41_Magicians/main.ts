// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician: string[] = ["Harry Potter", "Silvester", "Tom", "Jerry" ];

function show_magicians(magicians$: string[]){

    magicians$.forEach(famousMagicians => {

        console.log(famousMagicians);
        
    });

}

show_magicians(magician);