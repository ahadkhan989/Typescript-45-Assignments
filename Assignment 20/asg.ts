// Q:20 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface type{
    name:string,
    age:number,
    profession:string
}

let obj:type = {
    name : "AAhad",
    age : 20,
    profession : "Web Developer"
};

console.log(`\nThe Object is containing info: about me: \n`);

console.log(`My name is: ${obj.name}.`);
console.log(`I'm ${obj.age} years old..`);
console.log(`I'm a ${obj.profession}...`);

