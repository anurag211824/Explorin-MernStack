let list = [1, 2, 3, 4];
let obj = {
    k1: 'v1',
    k2: 'v2',
    k3: 'v3',
    k4: 'v4',
    k5: 'v5',
};

// for of loop
for (let e of list) {
    console.log(e);
}

// for in loop
for (let key in obj) {
    console.log(obj[key]);
}

// obj.entries
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

// obj.values
for (let value of Object.values(obj)) {
    console.log(value);
}

// obj.keys
for (let key of Object.keys(obj)) {
    console.log(key);
}




//let and const are scoped variables
//var in global scoped value

//anonymus function
// Immediately Invoked Function Expression (IIFE)
// This function executes immediately after it's defined
(() => {
    console.log('hello anon!'); // Log 'hello anon!' to the console
  })(); // The parentheses at the end invoke the function immediately
  
  // Define an array of numbers
  let myList = [1, 2, 3, 4, 5];
  
  // Iterate over each element in the array 'myList' using 'forEach' method
  myList.forEach((i) => {
    let newI = i + 1; // Increment each element by 1 and store in 'newI'
    console.log(newI); // Log the incremented value to the console
  });
  