// Write a program that accepts two integers as an argument and return its sum.

let num1 = window.prompt("Enter number 1: ");
let num2 = window.prompt("Enter number 2: ");

const findSum = (num1,num2) =>{
    return Number(num1) + Number(num2);
}

console.log(`Sum of ${num1} and ${num2} is ${findSum(num1,num2)}`);