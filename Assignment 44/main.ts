// Q:45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Define a function to create a car object with optional options...
function create_car(manufacturer:any, model:any, ...options:any[]){
    // Initialize a car object with manufacture and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional options to car create
    options.forEach(option => {
        let [key,value] = option.split(":");
        // i faced error in this code
        // car [key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = create_car("TOYOTA","Corolla", "color: Black", "sunroof: True");

// 
console.log(my_car);