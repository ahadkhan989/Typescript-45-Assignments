// Q:23 You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array

let str1 = "ahad";
let str2 = "KHANZADA";
let num1 = 20;
let num2 = 24;
let arr = [2, 4, 6, 8, 10];


//01 Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
console.log("str1 === ahad ",str1 === "ahad");
console.log("str1 === str2 ",str1 === str2,"\n");

//02 Tests using the lower case function
console.log("Tests using the lower case function");
console.log("str1 === lowercase ",str1 === str1.toLocaleLowerCase());
console.log("str2 === lowercase ",str2 === str2.toLocaleLowerCase(),"\n");

//03 Numerical tests involving equality and inequality
console.log("Numerical tests involving equality and inequality")
console.log("num1 === 20 ",num1 === 20);
console.log("num1 === num2 ",num1 === num2,"\n");

//04 Test using greater than and less than
console.log("Test using greater than and less than")
console.log("num1 < num2 ",num1 < num2);
console.log("num1 > num2 ",num1 > num2,"\n");

//05 Test using greater than or equal to, and less than or equal to
console.log("Test using greater than or equal to, and less than or equal to")
console.log("num1 <= num2 ",num1 <= num2);
console.log("num1 >= num2 ",num1 >= num2,"\n")

//06 Tests using "and" and "or" operators
console.log(`Tests using "and" and "or" operators`);
console.log("num1 > 18 || num2 < 28 ",num1 > 18 || num2 < 28);
console.log("num1 > 18 && num2 < 20 ",num1 > 18 && num2 < 20,"\n");

//07 Test whether an item is in a array
console.log("Test whether an item is in a array");
console.log("arr.includes(4) ",arr.includes(4));
console.log("arr.includes(12)",arr.includes(12),"\n");

//08 Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log("arr.includes(8) ",arr.includes(8));
console.log("arr.includes(3)",arr.includes(3),"\n");