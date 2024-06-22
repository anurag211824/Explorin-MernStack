function first() {
  console.log("First");
}

function second() {
  setTimeout(() => {
    console.log("Second");
  }, 0);
  console.log("I am at the end of the second function ");
}

function third() {
  Promise.resolve(1).then(() => {
    console.log("Third");
  });
  console.log("I am at the end of the third function ");
}

function fourth() {
  console.log("Fourth");
}

first();
second();
third();
fourth();
  
  

  
  