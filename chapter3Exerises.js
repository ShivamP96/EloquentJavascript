//Minimum

//Write a function min that takes two arguments and returns their minimum.
function min(a,b){
  if(a < b){
    return a
  } else {
    return b
  }
}

console.log(min(0,10));
// -> 0

console.log(min(0,-10));
// -> -10


// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two
// Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

function countChar(string, ch) {
  let counted = 0;
  for(let i = 0; i< string.length; i++){
    if(string[i] == ch){
      counted += 1;
    }
  }
  return counted;
}
