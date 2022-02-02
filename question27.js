// Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

let decimalNumber = window.prompt("Please enter a decimal number: ");
let convertTo = window.prompt("Enter B to conver to binary , H to Hex and O to octal");

const convertDecimal = (userInput, base) =>{
    userInput = Number(userInput);
    let res = 0;
    if(base == "B"){
        res = userInput.toString(2);
        return res;
    }else if(base == "H"){
        res = userInput.toString(16);
        return res;
    }else if(base == "O"){
        res = userInput.toString(8);
        return res;
    }else{
        console.log("Entered wrong value");
        return;
    }
}

console.log(`From decimal ${decimalNumber} to ${convertTo} ${convertDecimal(decimalNumber,convertTo)}`);