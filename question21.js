
// Write a program that takes input as an input and pushes all strings to an array.
// Eg: stringToarray(“hello”)
// Expected Output: [“h”, “e”, “l”, “l”, “o”]

let userString = window.prompt("Enter any string to push it into array: ");

let result = new Array();

for(let i = 0; i < userString.length; i++){
    result.push(userString.charAt(i));
}

console.log(result);