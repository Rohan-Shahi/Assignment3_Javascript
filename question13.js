// Write a program to print the circumference and area of a circle of radius entered by the user.

let radius = window.prompt("Enter the radius of the circle: ");

const getCircumference = (rad) =>{
    return 2 * Math.PI * rad;
}

const getArea = (rad) =>{
    return Math.PI * rad * rad;
}

console.log(`Radius = ${radius}`);

console.log(`Circumference = ${getCircumference(radius).toFixed(2)}`);
console.log(`Area of the circle = ${getArea(radius).toFixed(2)}`);