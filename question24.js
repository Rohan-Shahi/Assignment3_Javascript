// Write a JavaScript function to get the month name from a particular date.

let userDate = window.prompt("Please enter the date in MM/DD/YY format: ");

const getMonthName = (dateFormat) =>{

    let tempArr = dateFormat.split("/");
    let monthNum = Number(tempArr[0]);
    switch(monthNum){
        case 1:
            return "January";
        case 2:
            return "Feburary";  
        case 3:
            return "March";
        case 4:
            return "April";  
        case 5:
            return "May";
        case 6:
            return "June";       
        case 7:
            return "July";  
        case 8:
            return "August";
        case 9:
            return "Sept";  
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Invalid input";           
    }

}

console.log(`The month name for the provided date is: ${getMonthName(userDate)}`)