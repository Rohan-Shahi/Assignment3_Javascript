// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 

let initialArray = [1,2,3,4,5,6,7,8,9,"panda"];

const lastElement = (n = initialArray.length) =>{
    var res = [];
    if(n != initialArray.length){
        let initIndex = initialArray.length - n;
        for(let i = initIndex; i < initialArray.length ; i++){
            res.push(initialArray[i]);
        }
        return res;
    }else{
        return initialArray[n-1];
    }
}

console.log(lastElement(7));