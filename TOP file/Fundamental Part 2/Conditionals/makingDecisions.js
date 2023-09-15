/*

Basic syntax in JavaScript is that the code inside the curly braces runs until the result is 'true' other 'false' is the return.
However, only the code inside the curly braces block functions, the ones that is outside does not run.

*/

if (conditino) {
    // this block of code run
}

// the code in here is not conrolled by the conditional statement.

/*
To understand this syntax better, let's consider a real example.
Imagine a child being asked for help with a chore by their mother or father.
The parent might say "Hey sweetheart! If you help me by going and doing the shopping
I'll give you some extra allowance so you can afford that toy you wanted." In JavaScript, we could represent this like so:
*/

let shoppingDone = false;
let toy;

if (shoppingDone === true) {        // the triple equal sign means "true"
    childAllowance = 10;
} else {
    childAllowance = 0;
}

// however, this similar code can be typed as follows.

let shoppingDone2 = false;
let toy2;

if (shoppingDone2) {
    return "You won a reward"
} else {
    return "Better luck next time"
}


// nesting if...else together, just like in the weather app

if (choice === "sunny") {
    if (temperature > 18) {
        temperature = 'hot AF'
        para.context = `its a ${temperature}`
    } else if (temperature < 18) {
        temperatureOne = 'cold F'
        para.context = `its ${temperatureOne}`
    }
}

































