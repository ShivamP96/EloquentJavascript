// var prompt = require('prompt');
// prompt.start();
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)){
//   console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }


// Program that tests calcualtes and shows the value of 2^10. we use two bindings, one to keep track of our result and one to count how often we have multipllied this result by 12

let result = 1;
let counter = 0;
while (counter < 10 ) {
  result = result * 2;
  counter = counter + 1;
}
console.log("result",result)
console.log("Counter", counter )

// we start the counter at 0 because it is better



// A do loop differs from a while loop by at least executing the body at least once. 
// var readline = require('readline');

// let yourName;
// do {
//   readline.question("What is your name?")
// } while (!yourName);
// console.log(yourName)

// for loops

for(let number = 0; number <=12; number = number + 2) {
  console.log(number);
}

// the while loop above but in a for loop

let result1 = 1;
for(let counter1 = 0; counter1 < 10; counter = counter + 1) {
  result1 = result1 * 2;
}
console.log("result1",result1);


//Using a break statement

for( let current = 20;  ;current = current + 1){
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}