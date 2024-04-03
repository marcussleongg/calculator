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

function addToDisplay() {
    const added = document.createAttribute("p");
    display.appendChild(added);
}

const display = document.querySelector("#display")
const btnList = document.querySelectorAll("button")
console.log(btnList);
for (let i=0; i<btnList.length-1; i++) {
    let //how to change this to a changing variable name? btnn = document.querySelector(btnList[i]);
    //changing variable name.addEventListener('click', () => addToDisplay())
}
const testBtn = document.querySelector("button#zero");
testBtn.addEventListener('click', () => {
    console.log("0");
})
//btn.addEventListener('click', () => {
    //display.textContent = "0";
//})