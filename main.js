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

let display = document.querySelector("#display");

function addToDisplay(buttonContent) {
    const added = document.createElement("div");
    added.textContent = buttonContent;
    display.appendChild(added);
}

let zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener('click', () => addToDisplay(zeroBtn.textContent));
let oneBtn = document.querySelector("#one");
oneBtn.addEventListener('click', () => addToDisplay(oneBtn.textContent));
let twoBtn = document.querySelector("#two");
twoBtn.addEventListener('click', () => addToDisplay(twoBtn.textContent));
let threeBtn = document.querySelector("#three");
threeBtn.addEventListener('click', () => addToDisplay(threeBtn.textContent));
let fourBtn = document.querySelector("#four");
fourBtn.addEventListener('click', () => addToDisplay(fourBtn.textContent));
let fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener('click', () => addToDisplay(fiveBtn.textContent));
let sixBtn = document.querySelector("#six");
sixBtn.addEventListener('click', () => addToDisplay(sixBtn.textContent));
let sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener('click', () => addToDisplay(sevenBtn.textContent));
let eightBtn = document.querySelector("#eight");
eightBtn.addEventListener('click', () => addToDisplay(eightBtn.textContent));
let nineBtn = document.querySelector("#nine");
nineBtn.addEventListener('click', () => addToDisplay(nineBtn.textContent));
let addBtn = document.querySelector("#add");
addBtn.addEventListener('click', () => addToDisplay(addBtn.textContent));
let subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener('click', () => addToDisplay(subtractBtn.textContent));
let multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener('click', () => addToDisplay(multiplyBtn.textContent));
let divideBtn = document.querySelector("#divide");
divideBtn.addEventListener('click', () => addToDisplay(divideBtn.textContent));