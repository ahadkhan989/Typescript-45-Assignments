"use strict";
// Q:40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
Object.defineProperty(exports, "__esModule", { value: true });
// Defining the function "make_album"
function make_album(Artist_name, Album_title, tracks) {
    let album = {
        artist: Artist_name,
        title: Album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling 3 functions with different values in variables..
let album1 = make_album("Queen", "Killer Queen");
let album2 = make_album("Boston", "Rock & Roll Band");
// calling a 3rd function with 3 parameters.
let album3 = make_album("Damn", "Damn Yankees", 5);
// Printing values of Object that created by function..
console.log(album1);
console.log(album2);
console.log(album3);
// Output:
// 
