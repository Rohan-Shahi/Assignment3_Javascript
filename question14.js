// A person is eligible to vote if his/her age is greater than or equal to 18. Write a program  to find out if he/she is eligible to vote.

let userAge = window.prompt("Please provide your age: ");


let numAge = Number(userAge);
if(numAge >= 18){
    console.log(`You are eligible to vote!!`);
}else if(numAge < 18){
    console.log(`You are not eligible`);
}else{
    console.log(`Please provide correct Age value`);
}

