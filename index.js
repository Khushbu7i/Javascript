
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function calculator() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let opr = document.getElementById("operator").value;
      
if(opr === '+')
{
document.getElementById("output").value = "num1 + num2";
}
}