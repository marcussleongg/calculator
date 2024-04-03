function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

let firstNum = 0;
let secondNum;
let operator;
let result;

function operate(first, second, op) {
    if (op == '+') {
        return add(first, second);
    } else if (op == '-') {
        return subtract(first, second);
    } else if (op == '*') {
        return multiply(first, second);
    } else {
        return divide(first, second);
    }
}

let display = document.querySelector("#display");

function addToDisplay(buttonContent) {
    const added = document.createElement("span");
    added.textContent = buttonContent;
    display.appendChild(added);
}

let zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener('click', () => {
    secondNum = zeroBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let oneBtn = document.querySelector("#one");
oneBtn.addEventListener('click', () => {
    secondNum = oneBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let twoBtn = document.querySelector("#two");
twoBtn.addEventListener('click', () => {
    secondNum = twoBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let threeBtn = document.querySelector("#three");
threeBtn.addEventListener('click', () => {
    secondNum = threeBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let fourBtn = document.querySelector("#four");
fourBtn.addEventListener('click', () => {
    secondNum = fourBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener('click', () => {
    secondNum = fiveBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let sixBtn = document.querySelector("#six");
sixBtn.addEventListener('click', () => {
    secondNum = sixBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener('click', () => {
    secondNum = sevenBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let eightBtn = document.querySelector("#eight");
eightBtn.addEventListener('click', () => {
    secondNum = eightBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let nineBtn = document.querySelector("#nine");
nineBtn.addEventListener('click', () => {
    secondNum = nineBtn.textContent;
    if (firstNum == 0 && typeof operator == 'undefined') {
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
    } else if (typeof operator !== 'undefined') {
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        addToDisplay(result);
    }
});
let addBtn = document.querySelector("#add");
addBtn.addEventListener('click', () => {
    operator = addBtn.textContent;
});
let subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener('click', () => {
    operator = subtractBtn.textContent;
});
let multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener('click', () => {
    operator = multiplyBtn.textContent;
});
let divideBtn = document.querySelector("#divide");
divideBtn.addEventListener('click', () => {
    operator = divideBtn.textContent;
});