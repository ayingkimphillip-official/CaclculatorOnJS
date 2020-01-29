var operation = undefined;
var computeCounter = false;
var previousNumber = '';
var currentNumber = '';
var operationCounter = false;

function appendNumber(number) {
    var result = document.querySelector("#result");
    if (this.computeCounter === true) {
        this.previousNumber = '';
        this.currentNumber = '';
        allClear();
    }
    this.computeCounter = false;

    if (number.toString() === "." && this.currentNumber.toString().includes('.')) return
    result.value = result.value.toString() + number.toString();

    if (this.operationCounter === true) {
        this.currentNumber = this.currentNumber.toString() + number.toString();
        this.operationCounter = false;
    }
    else {
        this.currentNumber = this.currentNumber.toString() + number.toString();
    }
}

function getOperator(operator) {
    var result = document.querySelector("#result");
    if (result.value === '') return
    if (this.previousNumber !== '' && this.currentNumber !== '') {
        compute();
    }
    this.computeCounter = false;
    this.operationCounter = true;

    if (result.value.toString().endsWith('+') || result.value.toString().endsWith('-') || result.value.toString().endsWith('*') || result.value.toString().endsWith('/')) {
        result.value = result.value.substring(0, result.value.length - 1);
        result.value = result.value + operator;
        this.operation = operator;
    }
    else {
        result.value = result.value + operator;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
        this.operation = operator;
    }
}


function compute() {
    var result = document.querySelector("#result");
    if (result.value === '') return

    var output = 0;

    switch(this.operation) {
        case "+":
            if (this.previousNumber === '' || this.currentNumber === '') return
            output = parseFloat(this.previousNumber) + parseFloat(this.currentNumber);
            result.value = output.toString();
            this.currentNumber = output;
            this.previousNumber = '';
            break;
        case "-":
            if (this.previousNumber === '' || this.currentNumber === '') return
            output = parseFloat(this.previousNumber) - parseFloat(this.currentNumber);
            result.value = output.toString();
            this.currentNumber = output;
            this.previousNumber = '';
            break;
        case "*":
            if (this.previousNumber === '' || this.currentNumber === '') return
            output = parseFloat(this.previousNumber) * parseFloat(this.currentNumber);
            result.value = output.toString();
            this.currentNumber = output;
            this.previousNumber = '';
            break;
        case "/":
            if (this.previousNumber === '' || this.currentNumber === '') return
            output = parseFloat(this.previousNumber) / parseFloat(this.currentNumber);
            result.value = output.toString();
            this.currentNumber = output;
            this.previousNumber = '';
            break;
    }

    // result.value = eval(result.value);
    this.computeCounter = true;
}

function allClear() {
    var result = document.querySelector("#result");
    result.value = "";
}

function removePrevious() {
    var result = document.querySelector("#result");
    result.value = result.value.substring(0,result.value.length - 1);
}