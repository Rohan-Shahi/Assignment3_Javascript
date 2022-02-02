// Write a program that takes the string input and reverse the string and print it.

let userInput = window.prompt("Please enter a string to reverse it: ");

let reversedString = "";

const reverseString = (inputString) => {

    for(let i = inputString.length-1; i >= 0; i--){
        reversedString += inputString.charAt(i);
    }
    return reversedString;

}

console.log(`Your text: ${userInput}`);
console.log(`Reversed text: ${reverseString(userInput)}`);
