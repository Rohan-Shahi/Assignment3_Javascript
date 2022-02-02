// Write a program to check whether a given number is even or odd.

let userNum = window.prompt("Please enter any number: ");

let num = Number(userNum);
if(num < 0){
    console.log(`Please enter a positive number`);
}else if(num % 2 == 0){
    console.log(`${num} is an even number`);
}else{
    console.log(`${num} is an odd number`);
}