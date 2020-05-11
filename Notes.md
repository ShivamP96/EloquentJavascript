# Eloquent Javscript Notes 

## Chapter 1 - Values, Types and Operators

> Bits are any kind of two-valued things, usually described as zeros and ones.

> Based on unicode

``` c 
Bits that make up the number 13
0   0   0   0   1  1  0  1
128 64  32  16  8  4  2  1
```

### Values

> Volatile data storage ( working memory), Nonvolatile storage ( HDD )
> Each value is made up of bits, they all play different roles, The value **type** is one that determiens its role

### Numbers
> Values of the *Number* type are numeric values. 
> JS uses a fixed number of bits, 64 of them to store a single number value. There are only a limited number of patterns you can make with 64 bits, Which means that the the number of different numbers that can be represented are limited

With N decimal digits, you can represent 10<sup>N</sup> numbers. Given 64 binary digits you can do 2<sup>64</sup> which is 18 quintillion (18 zeros) a lot. Overflow ain't a problem dw about it. 

> Not all whole numbers less than 18 quintillion fit in a JavaScript number,
> though. Those bits also store negative numbers, so one bit indicates the sign of
> the number. A bigger issue is that nonwhole numbers must also be represented.
> To do this, some of the bits are used to store the position of the decimal point.
> The actual maximum whole number that can be stored is more in the range of
>11
>9 quadrillion (15 zeros)—which is still pleasantly huge.
>Fractional numbers are written by using a dot


``` C
9.81
```

> For very big or very small numbers, you may also use scientific notation by
>adding an e (for exponent), followed by the exponent of the number.
 
``` C
2.998e8

```

#### Arithmetic

> Arithmetic operations such
>as addition or multiplication take two number values and produce a new number
>from them

``` C
100 + 4 * 11
```

**+** & * & / & -  are called *Operators*
Follow BEDMAS or use brackets to be explicit

% symbol is *reminder* operation AKA *Modulo*

X % Y is the remainder of dividing X by Y 

e.g. 314 % 100 produces 14

and 144 % 12 = 0

#### Special Numbers

1 & 2. Infinity and -Infinity which represent the positive and negative infinities. Infinity - 1 is still Infinity etcc....

3. **NaN** means not a number even though it sis a value of the number type
e.g. 0/0, Infinity - Infinity


### Strings

> Next basic data type is *string*. It is used to represent text. Written by enclosing their content in quotes
``` javascript
`Down on the sea` backtics (Preferred method)
"Lie on the ocean" double quote
'Float on the ocean' single quote

```
Sometimes you wan tto put a Newline(enter) we can do this with *escaping* \ When we use a backslash \

It indicates that the character afer it has a special meaning: **n** means new line, **t** means tab

e.g.
``` javascript
"This is the first line\nAnd this is the second"
This is the first line
And this is the second
```
If you want just the backslash and not the special character. Do two backslashses

``` javascript
"A newline character is written like \"\\n\."
A newline character is written like "\n".
```

>Strings cannot be divided, multiplied, or subtracted, but the + operator can be used on them. It does not add, but it *concatenates* - glues two strings together/ The following line will produce the string "concatenate":

``` javascript
"con" + "cat" + "e" + "nate"
```

Stings have a number of associated methods that can be used on them. 

##### Template Literals strings aka backticks

They can do some tricks

``` javascript
`half of 100 is ${100 / 2}`
When you write something inside the ${} in a tempalte literal  the result will be computed, converted to a string and included at that position
```
### Unary Operators

> Operators that use two values are called *binary* operators, while those that take one are called *unary* operators. The minus operator can be both a binary operator and a unary operator.

``` javascript
console.log(-(10 - 2)) => See how it took two values

// -> -8  => answer
```
> Not all operators are string, some are written as words. **typeof** is one of them. It produces a string value naming the type of the value you give it

``` javascript
console.log(typeof 4.5)
// -> number
console.log(typeof "x")
// -> string
```

### Boolean Values

> "Yes", "No", "on", "off"

Javascirpt has *Boolean* type which has just two values, **true** and **false**

#### Comparison

``` javascript
console.log(3 > 2)
// -> true

console.log(3 < 2)
// -> false
```

> The > "greater than" and < "less than"  operators are binary. Applying them results in a Boolean value

Strings can be compared as well
``` javascript
console.log("Aardvark" < "Zoroaster")
// -> true
Uppercase letters are always less than lowercase ones
"Z" < "a"
Nonalphabetical character (!,-,etc..) are also included in the ordering
JS goes left to right when comparing, one by one

```
Other Operators:
``` javscript
>= Greater than or equal to
<= less than or equal to
== equal to
!= not equal to
```

Special case
``` javascript
console.log(NaN == NaN)
// -> false
```

#### Logical Operators

> There are some operators that can be applied to Boolean values themselves. 3 logical operators: *and*, *or* and *not*

``` javascript
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
>  Written with a question mark and a colon

``` javascript
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

>JavaScript goes out of its way to accept almost any program you give it, even programs that do odd things.

``` javascript 
8 * null => 0
"5" - 1 => 4
"5" + 1 => 51
"five" * 2 => NaN
false == 0 => true

```
>When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called **type coercion**. The null in the first expression becomes 0, and the "5" in the second expression becomes 5 (from string to number). Yet in the third expression, + tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to string).

> When something that doesn’t map to a number in an obvious way (such as "five" or undefined) is converted to a number, you get the value NaN. Further arithmetic operations on NaN keep producing NaN, so if you find yourself getting one of those in an unexpected place, look for accidental type conversions. When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same, except in the case of NaN

>When null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

``` javascript
null == undefined => true
null == 0 => false
```

> When you do not want any type conversions to happen, there are two additional operators: === and !==. The first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal

#### Short-Circuiting of Logical Operators
>The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the righthand value.


> The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types 

``` javascript
null || "user" => user
"Agnes" || "user" => Agnes
```

>  The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true.

 So 0 || -1 produces -1, and "" || "!?" yields "!?".

 > Another important property of these two operators is that the part to their right is evaluated only when necessary. In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated.The same goes for false && X, which is false and will ignore X. This is called **short-circuit evaluation**

 
 ---

 ## Chapter 2  - Program Structure

 > Def: *Expression* - A fragment of code that produces a value

 > A program is a list of statements, simplest kind of statement is an expression with a semicolon after it. 

 > Def: *Side effects* - Changing something else, like the statements that come after it

 ### Bindings

 ``` javascript
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
- can indclude $ and _ but nothing else
- special keywords cannot be used like let. 


### Console.log
lets you see a log of values from the program


