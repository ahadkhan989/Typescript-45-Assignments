"use strict";
// Q:42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// 
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Define a function to make changes
function make_great(magicians) {
    return magicians.map(name => `The great ${name}`);
}
// Defining an Array of magicians name
let magician_names = ["AAhad", "Ali", "Abdullah", "Shanza"];
// Call the function make_great() within variable to modify magicians names
let great_magicians = make_great(magician_names);
// Call show magicians that show modified list of magicians 
show_magicians(great_magicians);
