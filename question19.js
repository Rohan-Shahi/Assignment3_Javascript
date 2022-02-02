// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

let countryList = window.prompt("Please enter the name of the countries sperated by , ");

let countryArray = countryList.split(",");
let result = "";
const findLongestName = (countryNames) =>{
    for(let i = 0; i < countryNames.length; i++){
        if(countryNames[i].length > result.length){
            result = countryNames[i];
        }
    }
    return result;
}

console.log(`The country with the longest name is : ${findLongestName(countryArray)}`);