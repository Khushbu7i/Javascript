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

    // condition for integer input
    if (a === "" || b === "" || opr === "none") {
        document.getElementById("ans").innerHTML = "Enter Valid interger";
    } else if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        document.getElementById("ans").innerHTML = "Enter integer";
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
                        Str = "Cannot divide by 0";
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