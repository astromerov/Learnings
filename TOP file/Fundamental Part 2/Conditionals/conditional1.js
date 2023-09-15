/*

Conditional statements

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

*/

// use "if" statement to specify a block of Javascript code to be executed if a condition is true

if (condition) {
    // block of code goes here, if the condition is true
}

/* 

its always in lowercase letter, the uppercase if statemetn will cause an error

*/

// Make a good day greeting if the hour is less than 18:00

if (hour < 18) {
    greeting = "Good day"
}


// Therefore, if the condition is false, there is another statement, which is called "else" statement, it executes else statement if the condition is false

if (hour > 18) {
    greeting = "Hi, there and good morning"
} else {
    greeting = "Its early, go back to sleep"
}

/*

The "else if" statement is used to specify a new condition if the first condition is false.

*/

if (condition1) {
    // block of code will be executed if condition1 is true
} else if (condition2) {
    // block of code will be executed if condition1 is false
} else  {
    // block of code will be executed if condition1 and condition2 is false 
}


/*

If time is less than 10:00, create a "Good morning" greeting,
if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

*/

if (hour < 10) {
    greeting = "good day"
} else if (hour < 9) {
    greeting = "good day for you"
} else {
    greeting = "good day for all"
}













