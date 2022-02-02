// Write a program to take a string input and sort it alphabetically.

let userString = window.prompt("Please enter any string to sort: ");

let tempArray = userString.split("");

tempArray.sort();

let sortedString = tempArray.join("");

console.log(`Sorted String: ${sortedString}`);