"use strict";
// Q:14 You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Faraz", "Atif", "Mohsin", "Ali"];
for (let list = 0; list < guestList.length; list++) {
    console.log(`Hi ${guestList[list]}: \nWould you like to join me for dinner? Let’s catch up and enjoy a meal together.. \n`);
}
console.log(`Unfortunately ${guestList[3]} can't come to dinner`);
guestList[3] = "Farhaan";
console.log("\nNEW LIST OF INVITATION:\n");
for (let newList = 0; newList < guestList.length; newList++) {
    console.log(`Hi ${guestList[newList]}: \nWould you like to join me for dinner? Let’s catch up and enjoy a meal together.. \n`);
}
