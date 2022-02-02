// Write a program that finds a  random number from a given array.

let givenArray = [3,2,5,12,6,4];

const findRandomNumber = (userInput) =>{
    let randomIndex = Math.floor(Math.random() * (userInput.length));
    return userInput[randomIndex];
}

console.log(`Random number from the array is ${findRandomNumber(givenArray)}`);

