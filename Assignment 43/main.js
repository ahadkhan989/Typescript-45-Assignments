"use strict";
// Q:44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function with a rest parameters that accept arguments representing our Sandwich
function make_sandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(single_item => console.log("-> " + single_item));
    console.log("\nNow Enjoy Sandwich\n");
}
// Call the function 3 times with 3 different number of arguments 
make_sandwich("Fry-Chicken", "Cheese", "Mayo", "Egg");
make_sandwich("Beaf", "Ketchup");
make_sandwich("Chicken", "Butter", "vegetables");
