"use strict";
// Q:15  You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//  Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Faraz", "Atif", "Mohsin", "Ali"];
for (let list = 0; list < guestList.length; list++) {
    console.log(`Hi ${guestList[list]}: \nWould you like to join me for dinner? Let’s catch up and enjoy a meal together.. \n`);
}
console.log("Exciting news! \nGuys I found a bigger dinner table, so we have more space now!\n");
console.log(`"NEW LIST OF INVITATION:"`);
guestList.unshift("AAhad"); // At starting..
guestList.splice(3, 0, "Mairaaj"); // At middle..
guestList.push("Ubaid"); // At end..
console.log(guestList);
for (let newList = 0; newList < guestList.length; newList++) {
    console.log(`Hey ${guestList[newList]} \n“You’re invited to dinner at our place. We’ve upgraded our dining table!”\n`);
}
