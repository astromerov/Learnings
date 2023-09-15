/*

String methods are essential to learn while coding in JavaScript

*/

// The length property return the length of a string
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = text.length;

/*

There are 3 methods of extracting a string part

slice(start, end)
substring(start, end)
substr(start, length)

*/

//slice() extracts a part of string and returns the extracted point in a new string

let fruit = "apple, banana, kiwi";
let part = text.slice(7, 13)        //Outcome: Banana

/*
JavaScript counts positions from zero
First position is 0
second position is 1
*/

let fruit1 = "apple, banana, kiwi";
let part2 = text.slice(7)           //Outcome: banana, kiwi

// If the parameter is negative, the string counts from end

let fruit2 = "apple, banana, kiwi";
let part3 = text.slice(-12)         //Outcome: , apple

/*
Substring() is similar to slice()

The difference is that start and end values less than 0 are treated as 0 in substring().
*/

let fruit4 = "apple, banana, kiwi";
let part4 = str.substring(7, 13)            //Outcome: anana