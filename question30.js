



function multiply(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    document.getElementById("result").innerText = `The Result Is: ${number1 * number2}`;

}

function divide(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    document.getElementById("result").innerText = `The Result Is: ${number1 / number2}`;
}