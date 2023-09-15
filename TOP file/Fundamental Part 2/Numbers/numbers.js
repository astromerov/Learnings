// no error
let message = "hello";
message = 123456;   

/*
Programming languages that allow such things, such as JavaScript, are called "dynamiaclly typed"
meaing that there exist data types, but variables are not bound to any of them.
*/

let n = 123;
n = 123.345;

/*
The number type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
*/

// infinity 
alert ( 1 / 0);

// reference it directly
alert (infinity);

/*
NaN - it represents a computational error. It is a result of an incorrect or an undefined mathematical operation.
For instance...
*/

alert ("not a number" / 2);     // NaN, such division is erroneous

//NaN is sticky, any further mathemaitcal operation on NaN returns NaN

/*
So, if there is somewhere a NaN is assigned, it propogates the whole result (there's only one exception to that
) NaN ** 1 = 1;
*/

















