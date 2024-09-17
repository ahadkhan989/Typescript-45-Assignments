// Q:17 Think of at least five places in the world you’d like to visit.
//00 Store the locations in a array. Make sure the array is not in alphabetical order.
//01 Print your array in its original order.
//02 Print your array in alphabetical order without modifying the actual list.
//03 Show that your array is still in its original order by printing it.
//04 Print your array in reverse alphabetical order without changing the order of the original list.
//05 Show that your array is still in its original order by printing it again.   
//06 Reverse the order of your list. Print the array to show that its order has changed. 
//07 Reverse the order of your list again. Print the list to show it’s back to its original order.
//08 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//09 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// 00
let places = ["London","Germany","America","Saudi Arabia","Turkey","Canada"];

//01 Print your array in its original order.
console.log("Original Order ",places);

//02 Print your array in alphabetical order without modifying the actual list.
// Sort() : "Function used to determine the order of the elements."
console.log("Alphabetical Order ",[...places].sort());

//03 Show that your array is still in its original order by printing it.
console.log("Original order after sorting ",places);

//04 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Order ",[...places].reverse());

//05 Show that your array is still in its original order by printing it again.
console.log("Original Order after reverse sorting ",places);

//06 Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Order again ",[...places].reverse());

//07 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original order after sorting reverse again ",places);

//08 Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Again Alphabetical Order ",[...places].sort());

//09 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Again reverse and sort ",[...places].sort().reverse());


