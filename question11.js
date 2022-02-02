// Write a program to test if a given string contains only numbers and returns true or false.

let userInput = window.prompt("Please enter a string: ");

let result = true;

for(let i = 0; i < userInput.length; i++){
    if(userInput.charCodeAt(i) < 47 || userInput.charCodeAt(i) > 58){
        result = false;
        break;
    }
}

console.log(`Your string: ${userInput}`);
console.log(`Contains only numbers : ${result}`);   