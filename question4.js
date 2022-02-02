/*

Your are given a string “hello_i_am_string” convert the given string to:
“helloIAmString”
“hello i am string”
“Hello i am string”
“Hello I Am String”
“HELLOIAMSTRING”


*/

let givenString = "hello_i_am_string";

//For "helloIamString"

let tempArr = givenString.split("_");
for(let i = 1; i < tempArr.length; i++){
    tempArr[i] = tempArr[i][0].toUpperCase() + tempArr[i].slice(1);
}

console.log(tempArr.join(""));


//For "hello i am string"

// let tempArr = givenString.split("_");
// let output = tempArr.join(" ");
// console.log(output);

//For "Hello i am string"

// let tempArr = givenString.split("_");
// let newString = tempArr[0].charAt(0).toUpperCase() + tempArr[0].slice(1);
// tempArr[0] = newString;
// let res = tempArr.join(" ");
// console.log(res)



//For "Hello I Am String"
// let tempArr = givenString.split("_");

// for(let i = 0; i < tempArr.length;i++){
//     let newString = tempArr[i][0].toUpperCase() + tempArr[i].slice(1);
//     tempArr[i] = newString;
// }

// console.log(tempArr.join(" "));



//For “HELLOIAMSTRING”
// let tempArr = givenString.split("_");
// let output = tempArr.join("");
// console.log(output.toUpperCase());