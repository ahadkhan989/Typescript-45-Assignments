"use strict";
// Q:36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to AAhad's brand");
function make_shirt(size, text_message) {
    console.log(`You selected the ${size} size shirt with the message ${text_message} thats print on shirt.`);
}
make_shirt("large", `"Palm Angels"`);
