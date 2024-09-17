"use strict";
// Q:31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
// step 01
let user_names = ["Admin", "AAhad", "Faraz", "Atif", "Ali", "Mohsin", "Farhaan"];
user_names = [];
if (user_names.length === 0) {
    console.log("Your Array is empty, we need to find some more users!");
}
else {
    // using for each loop on Array
    user_names.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report ?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again`);
        }
    });
}
