// Looping a Triangle
// Write a looop that makes 7 calls to console.log  to output the following triangle

// #
// ##
// ###
// ####

let result = "";
while (result.length < 7){
  result = result + '#'
  console.log(result)

}


// Fizzbuzz

// print numbers from 1 - 100, exception; if / by 3 then print fizz and if / by 5 then print buzz/ once that is done modify program to print fizzbuzz for numbers that are divisinble by both 3 and 5. 

for(let i = 1; i < 100; i++){
  if(i%3 == 0 && i%5==0){
    console.log("FizzBuzz")
  } else if (i%3==0){
    console.log("Fizz")
  } else if (i%5==0){
    console.log("Buzz")
  } else {
    console.log(i)
  }
}


// ChessBoard
// write a program that creates a string that represents an 8x8 grid using newline characters to separate lines. At each position of the grid there is either a space or a # chracter

let bindingSize = 8;
for(let i = 0; i < bindingSize; i++){

  for (let j = 0; j < bindingSize; j++){
    

  }
}