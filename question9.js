// Write a program to find the number of vowels, consonants, digits and white space characters in a string.

let userString = window.prompt("Enter any String: ");

let vowelCount =0  , consonantsCount =0,digitsCount=0, whiteSpaceCount = 0;

for(let i = 0; i < userString.length; i++){
    let upperCase = userString.toUpperCase();
    let current = upperCase.charCodeAt(i);
    if(current === 32){
        whiteSpaceCount += 1;
    }else if(current > 47 && current < 58){
        digitsCount += 1;
    }else if(current === 65 || current === 69 || current === 73 || current === 79|| current === 85){
        vowelCount += 1;
    }else{
        consonantsCount += 1;
    }
}

console.log(`Your String: ${userString}`);

console.log(`Total Vowel Count = ${vowelCount}`);
console.log(`Total Consonant Count = ${consonantsCount}`);
console.log(`Total digit Count = ${digitsCount}`);
console.log(`Total whiteSpace Count = ${whiteSpaceCount}`);