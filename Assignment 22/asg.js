"use strict";
// Q:22  Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
Object.defineProperty(exports, "__esModule", { value: true });
let car = "honda";
console.log("----> 5 tests evaluate to True: <----\n");
// Test 01
console.log("Is car == `honda`? I predict True.");
console.log(car == `honda`);
// Test 02
console.log("Is car !== `toyota`? I predict True.");
console.log(car !== `toyota`);
// Test 03
console.log("Is the length of car > 3? I predict True.");
console.log(car.length > 3);
// Test 04
console.log("Is car name start with `h`? I predict True.");
console.log(car.startsWith(`h`));
// Test 05
console.log("Is the length of car name is >= 5? I predict True.");
console.log(car.length >= 5);
console.log("\n----> 5 tests evaluate to False: <----\n");
// Test 01
console.log("Is car == `subaru`? I predict False.");
console.log(car == `subaru`);
// Test 02
console.log("Is car == `civic`? I predict False.");
console.log(car == `civic`);
// Test 03
console.log("Is the length of car < 3? I predict False.");
console.log(car.length < 3);
// Test 04
console.log("Is car name start with `H`? I predict False.");
console.log(car.startsWith(`H`));
// Test 05
console.log("Is the length of car name is > 5? I predict False.");
console.log(car.length > 5);
