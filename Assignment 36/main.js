"use strict";
// Q:37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
// Making a function
function make_shirt(size = "Large", text_message = `'I love Typescript'`) {
    console.log(`Creating a ${size} size shirt with the message of ${text_message} thats print on shirt.`);
}
make_shirt();
// Calling a function with Medium size and print the message.
make_shirt("Medium");
// 
make_shirt("Small", `'I love Javascript'`);
