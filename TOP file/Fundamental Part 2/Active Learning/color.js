/*

Take a phrase, and cut out all the vowels

*/

const vowels = "This is a phrase where all the vowels should be faded away";
const noVowel = vowels.replace(/[aeiou]/gi, '');

console.log(noVowel);