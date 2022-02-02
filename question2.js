//Write a program to count occurrences of a certain character in a given string.

let userInput = window.prompt("Enter any string: ");
let userChar = window.prompt("Enter a character to count occurence: ");

//By using regex

// let regex = new RegExp(userChar,"g");
// console.log(regex)

// let occurArr = userInput.match(regex);

// console.log(occurArr.length);


let occurCounter = 0;
let charArr = userInput.split("");

for(let i = 0; i<charArr.length; i++){
    if(userInput[i] === userChar){
        occurCounter++;
    }
}

console.log(`Your string = ${userInput}`);
console.log(`Given Character = ${userChar}`);
console.log(`occurence of ${userChar} = ${occurCounter} times` );

