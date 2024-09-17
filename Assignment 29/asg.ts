// Q:29 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let user_names:string[] = ["Admin", "AAhad", "Faraz", "Atif", "Ali", "Mohsin", "Farhaan"];

for(let user = 0; user < user_names.length; user++){
    if(user_names[user] === `Admin`){
        console.log("“Good day, admin! May I present a status report for your consideration?”\n");
    }
    else{
        console.log(`Hello ${user_names[user]}, Thank you for logging in again.\n`)
    };
}