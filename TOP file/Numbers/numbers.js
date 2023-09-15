/*
JavaScript has one type of number. Numbers can be written with or without decimals.
*/

let x = 3.14;   // this is a decimal number
let y = 3;      // this is a non-decimal number


// Extra large or extra small numbers can be written with scientific (exponent) notation, like this;

let x1 = 123e5;     //12300000
let y1 = 123e-5;    //0.00123

/*
JavaScript Numbers are always 64-bit floating points

Just like other programming languages, JavaScript does not define numbers like integers, short, long, floating-point
etc. 

JavaScript numbers are always stored as double precision floating point numbers, following the internatioanl
IEEE 754 standard
*/

// Integer precision - integers are accurate up to 15 digits;
let x2 = 999999999999;      // 999999999999 - is the outcome
let y2 = 999999999999;      // 999999999999 - is the outcome

/* 
The maximum number of decimals is 17.
Floating precision.
*/

let x3 = 0.2 + 0.1;     // and the result for this may not always be accurate;

// multiplication and division

let x4 = (0.2 * 10 + 0.1 * 10) / 10;

/*
JavaScript uses + operation for both addition and concatenation.
Numbers are added, string are concatenated
*/

let x5 = 10;
let y5 = 20;
let z = x5 + y5;        // the result is 30

// However, if you add two strings ,the result will be two concetenation.

let x6 = "10";
let y6 = "20";
let z1 = x6 + y6;       // the result is 1020

// If you add string and a number, the result is always a string concatenation.























