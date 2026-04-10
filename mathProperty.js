// Math object allows you to perform mathematical tasks.
//  Math object is static


// Math property

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E



// Math methods

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)


console.log(Math.round(4.5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4


console.log(Math.ceil(3.2)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.5)); // -4

console.log(Math.floor(3.2)); // 3
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(-3.4)); // -4

// Math.trunc(x) returns the integer part of x

Math.trunc(4.5);

// Math.sign() returns if x is negative, null or positive 

// if x is +ve it return 1
// if x is -ve it return -1
// if x is zero it return 0

console.log(-1);

console.log(Math.pow(8,2));

console.log(Math.sqrt(45));

console.log(Math.abs(-4.5));

console.log(Math.min(0,34,234,1,2,4,534,-233,23,-234,-23,-1));

console.log(Math.max(0,34,234,1,2,4,534,-233,23,-234,-23,-1));

// JS Random number

// this will return the number between 0 to 9
let ran = Math.floor(Math.random() * 10);

console.log(ran);

//  floor is used to make roundof to down the number 
//  so we used it in random() method


// this will return the number 0 to 10
let ran1 = Math.floor(Math.random() * 10) + 1;

console.log(ran1);

let ra = Math.floor(Math.random() * 100) + 1;

console.log(ra);

// number methods

// Number() -> Returns a number
// parseFloat() -> parses a string and return a floating number 
// parseInt() -> parses a string and return a integer

// let a = prompt("Enter the number : ");
// let num = Number(a);

// console.log("the input number is :",num);

// Remember parseInt() is used when we want to deal with integer and want to extract the number from string.

console.log(parseInt("10"));

console.log(parseInt("10.9"));

console.log(parseInt("10px"));

console.log(parseInt("1px"));

console.log(parseFloat("10.5"));