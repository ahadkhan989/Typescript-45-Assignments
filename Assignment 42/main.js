"use strict";
// Q:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Define a function to make changes
function make_great(magicians) {
    return magicians.map(name => `The great ${name}`);
}
// Defining an Array of magicians name
let magician_names = ["AAhad", "Ali", "Abdullah", "Shanza"];
// Making a copy of Original array through .slice() function
let copy_magicians_name = magician_names.slice();
// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_name);
// Show both arrays 'Original' and 'Copied'
// Original
console.log(`\n'Original Array'`);
show_magicians(magician_names);
// Copied
console.log(`\n'Copied Array'`);
show_magicians(copy_great_magicians);
