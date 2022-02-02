// Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const checkType = (inputElement) =>{
    let ans = typeof inputElement;
    return ans;
}

console.log(`The data type of given input is: ${checkType({name: 'panda'})}`);