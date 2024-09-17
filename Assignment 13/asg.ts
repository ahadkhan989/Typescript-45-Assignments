// Q:13 If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// We will use loop method in this problem...
// loop: It's a programming structure that repeats/print a sequence of instructions until a specific condition is met..


// // Using For loop:
// // For loop: It consists of three parts: 1) Declare/initialize 2) condition 3) iteration/repetition statement..
// // The loop continues to execute as long as the condition evaluates to true..
// let guestList = ["Faraz", "Atif", "Mohsin", "Ali"];
// for (let list = 0; list < guestList.length ; list++){
//     console.log(`Hi ${guestList[list]}: \nWould you like to join me for dinner? Let’s catch up and enjoy a meal together.. \n`);
// }


// Using While loop:
// It consists of a one condition only. The loop continues to execute as long as the condition evaluates to true..
let guestList = ["Faraz", "Atif", "Mohsin", "Ali"];
let list = 0;
while (list < guestList.length){
    console.log(`Hi ${guestList[list]}: \nWould you like to join me for dinner? Let’s catch up and enjoy a meal together.. \n`);
    list++;
}