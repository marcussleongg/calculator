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
let secondNum = '';
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

function addToDisplay(content) {
    display.textContent = content;
}

let zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener('click', () => {
    secondNum += zeroBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let oneBtn = document.querySelector("#one");
oneBtn.addEventListener('click', () => {
    secondNum += oneBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let twoBtn = document.querySelector("#two");
twoBtn.addEventListener('click', () => {
    secondNum += twoBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let threeBtn = document.querySelector("#three");
threeBtn.addEventListener('click', () => {
    secondNum += threeBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let fourBtn = document.querySelector("#four");
fourBtn.addEventListener('click', () => {
    secondNum += fourBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let fiveBtn = document.querySelector("#five");
fiveBtn.addEventListener('click', () => {
    secondNum += fiveBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let sixBtn = document.querySelector("#six");
sixBtn.addEventListener('click', () => {
    secondNum += sixBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let sevenBtn = document.querySelector("#seven");
sevenBtn.addEventListener('click', () => {
    secondNum += sevenBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let eightBtn = document.querySelector("#eight");
eightBtn.addEventListener('click', () => {
    secondNum += eightBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});
let nineBtn = document.querySelector("#nine");
nineBtn.addEventListener('click', () => {
    secondNum += nineBtn.textContent;
    addToDisplay(secondNum);
    if (typeof operator !== 'undefined') {
        addToDisplay(secondNum);
    }
});

//first if statement is to check if it is the first time an operator is being selected//
//else statement will display the result of the previous operator and numbers selected before assigning the new operator//
let addBtn = document.querySelector("#add");
addBtn.addEventListener('click', () => {
    if (typeof operator == 'undefined') {
        operator = addBtn.textContent;
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
        secondNum = '';
        decimalBtn.disabled = false;
    } else {
        result = Math.round((operate(firstNum, secondNum, operator))*1000)/1000;
        firstNum = result;
        addToDisplay(result);
        operator = addBtn.textContent;
        secondNum = '';
        decimalBtn.disabled = false;
    }
});
let subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener('click', () => {
    if (typeof operator == 'undefined') {
        operator = subtractBtn.textContent;
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
        secondNum = '';
        decimalBtn.disabled = false;
    } else {
        result = Math.round((operate(firstNum, secondNum, operator))*1000)/1000;
        firstNum = result;
        addToDisplay(result);
        operator = subtractBtn.textContent;
        secondNum = '';
        decimalBtn.disabled = false;
    }
});
let multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener('click', () => {
    if (typeof operator == 'undefined') {
        operator = multiplyBtn.textContent;
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
        secondNum = '';
        decimalBtn.disabled = false;
    } else {
        result = Math.round((operate(firstNum, secondNum, operator))*1000)/1000;
        firstNum = result;
        addToDisplay(result);
        operator = multiplyBtn.textContent;
        secondNum = '';
        decimalBtn.disabled = false;
    }  
});
let divideBtn = document.querySelector("#divide");
divideBtn.addEventListener('click', () => {
    if (typeof operator == 'undefined') {
        operator = divideBtn.textContent;
        firstNum = operate(firstNum, secondNum, '+');
        addToDisplay(firstNum);
        secondNum = '';
        decimalBtn.disabled = false;
    } else {
        result = Math.round((operate(firstNum, secondNum, operator))*1000)/1000;
        firstNum = result;
        addToDisplay(result);
        operator = divideBtn.textContent;
        secondNum = '';
        decimalBtn.disabled = false;
    }
});

let equalBtn = document.querySelector("#equal");
equalBtn.addEventListener('click', () => {
    if (operator == '/' && secondNum == 0) {
        display.textContent = 'what';
    } else {
        addToDisplay(Math.round((operate(firstNum, secondNum, operator))*1000)/1000);
        decimalBtn.disabled = false;
    }
})

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', () => {
    display.textContent = '-';
    firstNum = 0;
    secondNum = '';
    operator = undefined;
    result = undefined;
    decimalBtn.disabled = false;
})

let decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener('click', () => {
    secondNum += decimalBtn.textContent;
    decimalBtn.disabled = true;
    addToDisplay(secondNum);
})

let deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener('click', () => {
    secondNum = secondNum.slice(0,secondNum.length-1);
    if (secondNum.length == 0) {
        display.textContent = '-';
    } else {
        addToDisplay(secondNum);
    }
})