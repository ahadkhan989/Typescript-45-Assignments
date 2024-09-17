// Q:19 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const listOfCities:string[] = ["Khipro", "Hyderabad", "Jamsabad", "Samaro", "Lahore", "Sukkar"];

console.log("\nList of Cities\n");

for(let list = 0; list < listOfCities.length; list++){
    console.log(listOfCities[list]);
}