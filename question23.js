// What does the array.shift() and array.unshift method do? Write a program that uses both the methods.

let initalArray = ['apple','banana','oranges','grapes','avacado'];

//shift method => shift method delete's the first element of the array and return the deleted array and also it changes the original array

console.log(`Array before applying shift method = ${initalArray}`);
initalArray.shift();
console.log(`Array after applying shift method = ${initalArray}`)


//unshift method => it adds the new element to the array from the beginning and we can add n number of items . It also changes the original array and returns the length of the new array
console.log(`Array before applying unshift method = ${initalArray}`);
initalArray.unshift('apple','kiwi');
console.log(`Array after applying unshift method = ${initalArray}`);