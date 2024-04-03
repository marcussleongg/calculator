function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

let firstNum;
let secondNum;
let operator;

function operate(first, second, op) {
    if (op == '+') {
        add(first, second);
    } else if (op == '-') {
        subtract(first, second);
    } else if (op == '*') {
        multiply(first, second);
    } else {
        divide(first, second);
    }
}