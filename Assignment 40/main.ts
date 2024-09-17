// Q:41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[] ){
    magicians.forEach(name => console.log(name));
}

// Defining an Array that contain magicians name
let magician_names = ["AAhad", "Ali", "Abdullah","Shanzay"]

// calling the func to print each magician name 
show_magicians(magician_names);