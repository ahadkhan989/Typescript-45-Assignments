"use strict";
// Q:26 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
Object.defineProperty(exports, "__esModule", { value: true });
// 1st Version
let alien_color1 = "Green";
if (alien_color1 === "Green") {
    console.log("Congrats! you just earned 5 points");
}
else if (alien_color1 === "Yellow") {
    console.log("you earned 10 points");
}
else if (alien_color1 === "Red") {
    console.log("You just earned 15 points");
}
// 2nd Version
let alien_color2 = "Yellow";
if (alien_color2 === "Green") {
    console.log("Congrats! you just earned 5 points");
}
else if (alien_color2 === "Yellow") {
    console.log("you earned 10 points");
}
else if (alien_color2 === "Red") {
    console.log("You just earned 15 points");
}
// 3rd Version
let alien_color3 = "Red";
if (alien_color3 === "Green") {
    console.log("Congrats! you just earned 5 points");
}
else if (alien_color3 === "Yellow") {
    console.log("you earned 10 points");
}
else if (alien_color3 === "Red") {
    console.log("You just earned 15 points");
}