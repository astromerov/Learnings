/*
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991)
or less than -(253-1) for negatives.
*/

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// BigInt type was recently introduced to the languages to represent integers of arbitrary length
// A BigInt value is created by appending n to the end of an integer

// the "n" at the end, means its a BigInt
const BigInt = 12389324234798572972374990n;