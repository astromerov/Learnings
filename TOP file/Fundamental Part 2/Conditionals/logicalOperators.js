/*

There are a total of 4 logical operators
|| = or
&& = and
! = not
?? = nullish coalescing

Despite the fact they're called the logical operators, they can be used in any data type not only boolean

*/

// || = the OR example

alert (true || true);       // true
alert (false || true);      // true 
alert (true || false);      // true
alert (false || false);     // false


/*

As supplied above, the result is always true, except when two operands are false
If an operand is not a boolean, its converted into a boolean for the evaluation.

For instance, the number 1 is treated as true, and 0 is treated as false

*/

if (1 || 0) {
    alert ("truthy");
}

// Most of the time the || is used in if statement, to test if any of the given condition is true, for example;

let hour = 9;

if ( hour > 9 || hour < 10) {
    alert ("good day for you")
}

// more conditions can be passed 
let anotherHour = 12;
let isWeekend = true;

if (hour > 10 || hour < 18 || isWeekend) {
    alert ("the time is not up yet")
}


// Getting the first truthy value from a list of variables or expressions

let firstName = '';
let secondName = '';
let lastName = 'Coder'

alert (firstName || secondName || lastName || "Anonymous");         // Outcome: Coder

// The code above is "coder" because "firstName", and "secondName" is null/empty, and therefore the output is Coder, otherwise "anonymous"











