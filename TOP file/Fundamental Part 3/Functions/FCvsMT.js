/*

JavaScript functions versus methods

Function doesn't need any objects and is independant.
Method is a function which is linked with any object.

Functions can be called directly by its name, while the method uses a specific name of the object

*/


function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.fillStyle = "rgba(255,0,0,0.5)";
            ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
            ctx.fill();
        }
    }


// draw() is a custom function. and it runs without any errors.


/*

Invoke or run it?

Invoke - means call upon, for help or assistance.
Run - runs the whole code

*/

function number() {
    return Math.floor(Math.random() * number);
    }


/*

Invoking functions.

To actually use the function that has be defined, you've got to run it - or invoke it.
This is done by including the same name of the function somewhere, followed by the parentheses"()"

*/

function myName() {
    // block of code
    alert("hello there")
}

myName();
// call this function once. And this type of function is called "function declaration"












