// Write a program to find the number of uppercase and lower case characters in a string.

let userString = window.prompt("Please enter any string: ");

let upperCount = 0;
let lowerCount = 0;
let others = 0;

for(let i=0; i<userString.length; i++){
    let currentCharacter = userString.charCodeAt(i);

    if(currentCharacter > 64 && currentCharacter < 91 ){
        upperCount += 1;
    }else if(currentCharacter > 96 && currentCharacter < 123){
        lowerCount += 1;
    }else{
        others +=1;
    }
}


console.log(`Your string: ${userString}`);
console.log(`UpperCase Characters: ${upperCount}` );
console.log(`LowerCase Characters: ${lowerCount}`);
console.log(`Other Characters: ${others}`);