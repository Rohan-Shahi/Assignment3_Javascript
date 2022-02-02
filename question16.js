// Write a program that displays all the odd numbers from the range entered by the user.

let minRange = window.prompt("Enter a positive minimum range value: ");
let maxRange = window.prompt("Enter a positive maximum range value: ");

console.log(`The odd numbers from ${minRange} to ${maxRange} are: `)
if(Number(minRange) > Number(maxRange)){
    console.log("Please enter min range smaller than max range");
}else if(Number(minRange) < 0 || Number(maxRange) < 0){
    console.log("Please enter a positive number");
}else{
    for(let i = Number(minRange) ; i < Number(maxRange) ; i++){
        if(i % 2 !== 0){
            console.log(`${i }`);
        }else{
            continue;
        }
    }
}

  
    
    

