console.log("hello world!");

let pTags = document.getElementsByTagName("p");
//console.log(pTag);


let currentDate = new Date();


let datestring = currentDate.getDate() + "/" +
    (currentDate.getMonth() + 1) + "/" +
    currentDate.getFullYear();


// pTag.innerHTML = `
// <a href="#">Today Date</a>: ${datestring}
// `;
console.log(datestring);

// Get the paragraph elements by class name
let pTagByClass = document.getElementsByClassName("demo-p");
let numPtags = pTagByClass.length;

// Iterate over the collection and set the innerHTML for each
for (let pTag of pTags) {
    console.log(pTag);
    pTag.innerHTML = `
    <a href="#">Today Date</a>: ${datestring}
    `;
}

// Add event listeners for mouse hover and mouse out
let heading = document.getElementById("heading");
heading.addEventListener("mouseover", function() {
    heading.innerHTML = "Hovered";
});
heading.addEventListener("mouseout", function() {
    heading.innerHTML = "Unhovered";
});


document.onscrollend= () =>{
    console.log("you scroll the page");
}