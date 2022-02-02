// Question : Write a program to take a string input and display its length and last character.

let userInput = window.prompt("Please enter any string: ");

let stringLength = userInput.length;
let lastCharacer = userInput.charAt(stringLength-1);

console.log(`Your string = ${userInput}`);
console.log(`String length = ${stringLength}`);
console.log(`Last Character = ${lastCharacer}`);