
/*

Create a function called convertToCelsius() that converts a temperature from Fahrenheit to Celsius
Formula for conversion is: Celsius=(Fahrenheit-32) * 5/9

*/

// Common mistake

/* 
function convertToCelsius(fahrenheit) {
    let celsius = fahrenheit - 32 * 5 /9;
    return celsius;
}

console.log(celsius);

*/

// Correct code to calculate the temperature

function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 /9;
    return celsius;
}

let fahrenheitTemperature = 32;
let convertTemparature = convertToCelsius(fahrenheitTemperature);

console.log(celsiusTemperature);












