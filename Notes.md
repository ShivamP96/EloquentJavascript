# Eloquent Javscript Notes

## Chapter 1 - Values, Types and Operators

> Bits are any kind of two-valued things, usually described as zeros and ones.

> Based on unicode

```c
Bits that make up the number 13
0   0   0   0   1  1  0  1
128 64  32  16  8  4  2  1
```

### Values

> Volatile data storage ( working memory), Nonvolatile storage ( HDD )
> Each value is made up of bits, they all play different roles, The value **type** is one that determiens its role

### Numbers

> Values of the _Number_ type are numeric values.
> JS uses a fixed number of bits, 64 of them to store a single number value. There are only a limited number of patterns you can make with 64 bits, Which means that the the number of different numbers that can be represented are limited

With N decimal digits, you can represent 10<sup>N</sup> numbers. Given 64 binary digits you can do 2<sup>64</sup> which is 18 quintillion (18 zeros) a lot. Overflow ain't a problem dw about it.

> Not all whole numbers less than 18 quintillion fit in a JavaScript number,
> though. Those bits also store negative numbers, so one bit indicates the sign of
> the number. A bigger issue is that nonwhole numbers must also be represented.
> To do this, some of the bits are used to store the position of the decimal point.
> The actual maximum whole number that can be stored is more in the range of
> 11
> 9 quadrillion (15 zeros)—which is still pleasantly huge.
> Fractional numbers are written by using a dot

```C
9.81
```

> For very big or very small numbers, you may also use scientific notation by
> adding an e (for exponent), followed by the exponent of the number.

```C
2.998e8

```

#### Arithmetic

> Arithmetic operations such
> as addition or multiplication take two number values and produce a new number
> from them

```C
100 + 4 * 11
```

**+** & * & / & - are called *Operators\*
Follow BEDMAS or use brackets to be explicit

% symbol is _reminder_ operation AKA _Modulo_

X % Y is the remainder of dividing X by Y

e.g. 314 % 100 produces 14

and 144 % 12 = 0

#### Special Numbers

1 & 2. Infinity and -Infinity which represent the positive and negative infinities. Infinity - 1 is still Infinity etcc....

3. **NaN** means not a number even though it sis a value of the number type
   e.g. 0/0, Infinity - Infinity

### Strings

> Next basic data type is _string_. It is used to represent text. Written by enclosing their content in quotes

```javascript
`Down on the sea` backtics (Preferred method)
"Lie on the ocean" double quote
'Float on the ocean' single quote

```

Sometimes you wan tto put a Newline(enter) we can do this with _escaping_ \ When we use a backslash \

It indicates that the character afer it has a special meaning: **n** means new line, **t** means tab

e.g.

```javascript
"This is the first line\nAnd this is the second"
This is the first line
And this is the second
```

If you want just the backslash and not the special character. Do two backslashses

```javascript
"A newline character is written like \"\\n\."
A newline character is written like "\n".
```

> Strings cannot be divided, multiplied, or subtracted, but the + operator can be used on them. It does not add, but it _concatenates_ - glues two strings together/ The following line will produce the string "concatenate":

```javascript
"con" + "cat" + "e" + "nate";
```

Stings have a number of associated methods that can be used on them.

##### Template Literals strings aka backticks

They can do some tricks

```javascript
`half of 100 is ${100 / 2}`
When you write something inside the ${} in a tempalte literal  the result will be computed, converted to a string and included at that position
```

### Unary Operators

> Operators that use two values are called _binary_ operators, while those that take one are called _unary_ operators. The minus operator can be both a binary operator and a unary operator.

```javascript
console.log(-(10 - 2)) => See how it took two values

// -> -8  => answer
```

> Not all operators are string, some are written as words. **typeof** is one of them. It produces a string value naming the type of the value you give it

```javascript
console.log(typeof 4.5);
// -> number
console.log(typeof "x");
// -> string
```

### Boolean Values

> "Yes", "No", "on", "off"

Javascirpt has _Boolean_ type which has just two values, **true** and **false**

#### Comparison

```javascript
console.log(3 > 2);
// -> true

console.log(3 < 2);
// -> false
```

> The > "greater than" and < "less than" operators are binary. Applying them results in a Boolean value

Strings can be compared as well

```javascript
console.log("Aardvark" < "Zoroaster")
// -> true
Uppercase letters are always less than lowercase ones
"Z" < "a"
Nonalphabetical character (!,-,etc..) are also included in the ordering
JS goes left to right when comparing, one by one

```

Other Operators:

```javscript
>= Greater than or equal to
<= less than or equal to
== equal to
!= not equal to
```

Special case

```javascript
console.log(NaN == NaN);
// -> false
```

#### Logical Operators

> There are some operators that can be applied to Boolean values themselves. 3 logical operators: _and_, _or_ and _not_

```javascript
&& = and: Both values have to be true
console.log(true && false)
// -> false

console.log(true && true)
// -> true

|| = or: True if either of the given values is true
console.log(false || true)
// -> true

console.log(false || false)
// -> false

! = not: unary operator that flips the value given to it
!true = false
!false = true
```

Order of operators: || lowest, then && then comparison etc..

#### Ternary Operators

> It operates on three values.
> Written with a question mark and a colon

```javascript
console.log(true ? 1 : 2);
// -> 1 (shortcircuit to 1)
console.log(false ? 1 : 2);
// -> 2

Value on left of ? will pick which of the toher two values will come out
When true, it chooses the middle value, and when its false it will choose the value on the right
```

### Empty Values

> There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information

### Automatic Type Conversion

> JavaScript goes out of its way to accept almost any program you give it, even programs that do odd things.

```javascript
8 * null => 0
"5" - 1 => 4
"5" + 1 => 51
"five" * 2 => NaN
false == 0 => true

```

> When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called **type coercion**. The null in the first expression becomes 0, and the "5" in the second expression becomes 5 (from string to number). Yet in the third expression, + tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to string).

> When something that doesn’t map to a number in an obvious way (such as "five" or undefined) is converted to a number, you get the value NaN. Further arithmetic operations on NaN keep producing NaN, so if you find yourself getting one of those in an unexpected place, look for accidental type conversions. When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same, except in the case of NaN

> When null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

```javascript
null == undefined => true
null == 0 => false
```

> When you do not want any type conversions to happen, there are two additional operators: === and !==. The first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal

#### Short-Circuiting of Logical Operators

> The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the righthand value.

> The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types

```javascript
null || "user" => user
"Agnes" || "user" => Agnes
```

> The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true.

So 0 || -1 produces -1, and "" || "!?" yields "!?".

> Another important property of these two operators is that the part to their right is evaluated only when necessary. In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated.The same goes for false && X, which is false and will ignore X. This is called **short-circuit evaluation**

---

## Chapter 2 - Program Structure

> Def: _Expression_ - A fragment of code that produces a value

> A program is a list of statements, simplest kind of statement is an expression with a semicolon after it.

> Def: _Side effects_ - Changing something else, like the statements that come after it

### Bindings

```javascript
let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);
 // -> 100

// = op to change existing bindings

let mood  = "light";
console.log(mood);
// -> light

mood = "dark";
console.log(mood);
// -> dark

Another Example
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// -> 105

Eg: Empty Binding gives Undefined

A single let statement may define multiple bindings.
let one = 1, two  = 2;
console.log(one + two );
// -> 3

The words var and const can also be used to create bindings, in a similar way to let

e.g.
var name = "Ayda";
const greeting = 'Hello';
console.log(greeting + name)
// -> Hello Ayda

```

### Explaining Var and Let and const

Var (short for "variable") is the way bindings were declared in pre-2015 JS.
Const stands for constant. It defines a constant binding, which points at the same value for as long as it lives. This is useful for bindings that give a name to a value so that you can easily refer to it later.
Let is a bit confusing as its similar to var but let is generally better practice

### Binding Rules

- cannnot start with numbers
- can indclude \$ and \_ but nothing else
- special keywords cannot be used like let.

### Console.log

lets you see a log of values from the program

### Conditionals

```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNUmber)){
  console.log("your number is the square root of " + theNUmber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

Chaining multiple if and else statements together

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

While and do loops

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}


Using a break statement

for( let current = 20; current <= 20 ;current = current + 1){
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}


Different ways to update bindings

counter = counter + 1;
counter+= 1;
result *= 2;
nunmber +=2;
conter++;
couner--;

```

### Switch

switch is intended to replace the code below

```javascript
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();


like so

switch (prompt("what is the weather like?)){
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress Lightly.");
   // no break here cause we can share code between cases
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}



```

---

## Chapter 3 Function

### Defining a Function

A function def is a regular binding where the value of the binding is a funciton.

```javascript
const square = function (x) {
  return x * x;
};

console.log(square(12));
// -> 144
```

A **function** is created with an expression that starts with the keyword function.
The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement

``` javascript
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// -> Pling!


const power = function(base, exponent) {
  let result = 1;
  for(let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
};
console.log(power(2,0));

// -> 1024
```

A return keyword without an expression after it will cause the function to return undefined

 Functions that don’t have a return statement at all, such as makeNoise, similarly return undefined.

 Every time the function is called, new instances of these bindings are created. This provides some isolation between functions—each function call acts in its own little world (its local environment)

 In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the **var** keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

 ``` javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
 ```

 Blocks of functions can be created inside other blocks and functions, producing multiple degrees of locality.

 ``` javascript
 const hummus = function (factor){
   const ingredient = function(amount, unit,name){
     let ingredientAmount = amount * factor;
     if (ingredientAmount > 1) {
       unit += 's';
     };
     ingredient(1,"can","chickpeas");
     ingredient(0.25, "cup", "tahini");
     ingredient(0.25, "cup", "lemon juice");
     ingredient(1, "clove", "garlic");
     ingredient(2, "tablespoon", "olive oil");
     ingredient(0.5, "teaspoon", "cumin");
};
   }
hummus(2)
 ```

 ### function as values

function binding usually acts as a name for a specific piece of the program. a function vaue can do all the other things values can do. 
 ``` javascript
 let launchMissiles = function() {
   missileSystem.launch("now");
 };
 if (safeMode) {
   launchMissiles = function() {/* do nothing */}
 }

 ```

 ### declaration notation

 Simpler way to make function binding. 

This is **function declaration**, defines the binding *square* and points it at the given function. 
 ```javascript
 function square(x) {
   return x*x;
 }
 ```

 funciton declarations are not part of the regular top-to-bottom flow of control. They move to to top of their scope anc can be used by all the code in that scope
```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

### Arrow Functions

Third notation for functions. instead of **function** keyobard it uses an arrow => 

``` javascript
const power = (base, exponent) => {
  let result = 1;
  for(let count = 0; count < exponent; conut++){
    result *= base;
  }
  return result;
};

compared to

const power = function(base, exponent){
  Insert code here
}

or 

function power(base, exponent){
  Insert code here
}
```
The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”

When there is only one parameter name, you can omit the parentheses around the parameter list.

``` javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

const horn = () => {
  console.log("Toot");
};
```

### call stack
The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack.

so it goes to the line and then goes thought he whole function and then back to the next line

very squential 

``` javascript
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// -> hello harry
// -> bye
```


### optional Arguments

JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined

``` javascript
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16


if you give too few operations, those values get undefined

function minus(a,b) {
  if(b == undefined) return -a;
  else return a-b;
}
console.log(minus(10))
// -> -10
```

If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.

``` javascript
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

### closure

The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question.
What happens to local bindings when the function call that created them is no longer active?
It defines a function, wrapValue, that creates a local binding. It then returns a function that accesses and returns this local binding.

``` javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// -> 1
console.log(wrap(2));
// -> 2
```
This situation is a good demonstration of the fact that local bindings are created anew for every call, and different calls can’t trample on one another’s local bindings

This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure.
A function that references bindings from local scopes around it is called a closure

With a slight change, we can turn the previous example into a way to create functions that multiply by an arbitrary amount.

```
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2)
console.log(twice(5));
// -> 10
```
In the example, multiplier is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when that is called, it multiplies its argument by 2.

### Recursion

