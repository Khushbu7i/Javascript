function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculator() {

    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let opr = document.getElementById("operator").value;
    let Str = "";
    const message ="Cannot be divided by zero"
    const integer="Enter Integer"
    const valid="Enter Valid Input"
    // condition for integer input
    if (a === "" || b === "" || opr === "none") {
        document.getElementById("ans").innerHTML =  `Error:${valid}`;
    } else if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        document.getElementById("ans").innerHTML = `Error:${integer}`;

    } else {
        switch (opr) {
            case "+":
                {
                    let c = add(a,b);
                    Str = "add is " + c;
                    break;
                }
            case "-":
                {
                    let c = sub(a,b);
                    Str = "sub is " + c;
                    break;
                }
            case "*":
                {
                    let c = mult(a,b);
                    Str = "mult is" + c;
                    break;
                }
            case "/":
                {
                    let c = div(a,b);
                    // condition for division by zero 
                    if (isFinite(c)) {
                        Str = "div is" + c;
                        break;
                    } else {
                       Str = `Error:${message}`;
                        break;
                    }
                }
            default:
                {
                    Str = "invalid"
                    break;
                }
        }
        document.getElementById("ans").innerHTML = Str;
    }
}