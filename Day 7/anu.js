// Define a list with a string and a number
let list = ["anurag", 123];
console.log(typeof list); // Prints the type of the list, which is "object"
console.log(list[1]); // Accesses and prints the second element of the list, which is 123
console.log(list.at(-2)); // Accesses and prints the element at the second to last index, which is "anurag"

// Define an object with properties name and org
let obj = {
  name: "dev",
  org: "explorin",
};
console.log(obj["name"]); // Accesses and prints the name property of the object, which is "dev"
console.log(obj["org"]); // Accesses and prints the org property of the object, which is "explorin"
obj["org"] = "intel"; // Updates the org property of the object to "intel"
console.log(obj["org"]); // Accesses and prints the updated org property of the object, which is "intel"

// Loop from 0 to 10 and print each number
for (let i = 0; i <= 10; i++) {
  console.log(i); // Prints the current value of i in each iteration
}

// Define a list of objects, each with properties name and place
list = [
  { name: "test1", place: "roorke" },
  { name: "test1", place: "roorke" },
];

// Loop through the list of objects and print the name and place properties
for(let i = 0; i < 2; i++) {
  console.log(
    list[i]['name'] + ':' + // Accesses and prints the name property of the current object, followed by a colon
    list[i].place // Accesses and prints the place property of the current object
  );
}
