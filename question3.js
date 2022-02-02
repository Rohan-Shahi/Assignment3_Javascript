/*
question : 
Write a program that takes a string input and find distinct characters in the string.
String: apple 
Expected Output: aple.

*/

let userInput = window.prompt("Please enter any string: ");

let finalOutput = "";

const findDistinctCharacter = (inputString) =>{
    for(let i = 0; i < inputString.length; i++){
        if(finalOutput.indexOf(inputString.charAt(i)) === -1){
            finalOutput += inputString.charAt(i);
        }
    }
    return finalOutput;
}

console.log(findDistinctCharacter(userInput));