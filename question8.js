// Write a program to check if the word 'orange' is present in the "This is orange juice".

let givenString = "This is orange juice";

if(givenString.includes("orange") == true){
    console.log(`Yes the orange word is present in the "${givenString}"`);
}else{
    console.log(`No the orange is not present in the "${givenString}"`);
}