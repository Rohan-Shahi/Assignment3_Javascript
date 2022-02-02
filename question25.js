// Write a program that finds the day and date 3 months from today.
// Eg: 
// Today’s date: 27/01/2022, Program should print 27/03/2022 and sunday.

let date = new Date();

let futureMonth = date.getMonth() + 3;
if(futureMonth > 12){
    futureMonth = futureMonth - 12;
}

const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let futureDate = date.setMonth(futureMonth);
console.log(`Date 3 months from today is: ${new Date(futureDate)}`);
console.log(`The day will be: ${weekDays[new Date(futureDate).getDay()]}`);
