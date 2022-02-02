/* Write a program to return a string with the characters of the odd index position from a given string. 
String: “Javascript”
Expected output: Jvsrp */

let userString = window.prompt("Enter any string: ");

let res = "";

for(let i = 0; i < userString.length; i++){
    if(i % 2 == 0){
        continue;
    }else{
        res += userString.charAt(i);
    }
    
}

console.log(`Your string: ${userString}`);
console.log(`Result : ${res}`);
