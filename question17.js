// Write a program that reverse a number.

let userNumber = window.prompt("Please enter a number: ");

let tempRes = userNumber.split("").reverse().join("");
let finalRes = Number(tempRes);
console.log(finalRes);
