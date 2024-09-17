// Q:16 You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. 
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guestList = ['AAhad','Faraz','Atif','Mairaaj','Mohsin','Ali','Ubaid'];
console.log(guestList);

console.log(`\n"SORRY GUYS": Due to limited space, I can invite only two people for dinner.\n`);

while(guestList.length > 2){
    const removeGuest = guestList.pop();
    console.log(`Dear ${removeGuest}\n“I truly regret not inviting you to the dinner, and I appreciate your understanding.”\n`);
}

// forEach : Performs the specified action for each element in an array.
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
guestList.forEach(guest => {
    console.log(`Dear ${guest}, "You're still invited to dinner..`);
});

guestList.pop();
guestList.pop();

console.log(`\n"Final guest list is: "`,guestList);