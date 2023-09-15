// A string in JavaScript must be surrounded in quotes

let str = "hello";
let str2 = 'Single quote are ok too';
let phrase = `can embed another ${str}`;

/*
JavaScript have three types of quotes:
1. Single quote = ''
2. Dounle quote = ""
3. Backticks = ``
*/

// Single and double quotes are practically the same and does not play any difference between them.
/*

Backticks are "extended funtionality" quotes. They allow us to embed variables and expressions into a string
by wrapping them ${...}, as an example

*/ 

let name = "John";

// embed a variable
alert (`Hello, ${name}!`)       //Outcome: Hello, John

// embed an expression
alert (`the result is ${1 + 2}!`);  // 

/*

The expression inside the backticks is evaluated and the result becomes a part of the string.
This can only be done in backticks

*/











