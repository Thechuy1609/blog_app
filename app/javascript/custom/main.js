let displayValue = "0";
let operanD = null ;
let firstOperator = null;
let secondOperator = null;
let result;
const buttons = document.querySelectorAll('button');

let data = [];
let data2 = [];
let data3 = [];

function add(value1,value2){
let result = value1 + value2;
console.log(result)
}
function substract(value1,value2){
    let result = value1 - value2;
    return result

}
function multiply(value1,value2){
    let result = value1 * value2;
    return result

}
function divide(value1,value2){
    let result = value1 / value2;
    return result

}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
if(displayValue.length > 7){
        clearDisplay();
    }
}
updateDisplay();





function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('nDecimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('AC'))
                clearDisplay();
                updateDisplay();
        }
    )}
}
clickButton();

function inputOperand(operand){
if(displayValue == "0" && secondOperator == null){
displayValue = "";
firstOperator = ""
displayValue += operand;
firstOperator += operand;
return firstOperator;
}
else if(displayValue == "" ||  secondOperator > 0 ||
    firstOperator == result
){
displayValue += operand;
secondOperator = "";
secondOperator = operand;
data2.push(displayValue);
secondOperator = data2[data2.length - 1];
secondOperator = (secondOperator*1);
return secondOperator;
}
else if(displayValue.length > 7){
    displayValue = "0";
    data = []
}
else if(displayValue.length > 0 && secondOperator == null){
displayValue += operand;
data.push(displayValue);
firstOperator = data[data.length - 1];
}
else if(data3.includes("+" )){
    displayValue = ""
}
else if(data3.includes("-" )){
    displayValue = ""
}
else if(data3.includes("*" )){
    displayValue = ""
}
else if(data3.includes("÷" )){
    displayValue = ""
};
if(result == firstOperator){
secondOperator += operand;
let x = (firstOperator * 1);
return x

}
}


function inputOperator(operator){
    if(displayValue.length > 0) {
        data3.push(operator);
        displayValue = "";
        };
    if(firstOperator == result){
        displayValue = "";
        data3.push(operator);
        }
}

function inputEquals(){
if(firstOperator == null || secondOperator == null ||
data3 == undefined || data3 == [] || secondOperator === 0
){return displayValue = "lmao"};
let x = (firstOperator * 1)// turning first number string into a number
let y = (secondOperator * 1)// turning second number string into a number;
    console.log(x);
    console.log(y);
if(data3.includes("+")){
   result = x+y
}
else if(data3.includes("-")){
    result = x-y
 }
 else if(data3.includes("*")){
    result = x*y
 }
 else if(data3.includes("÷")){
    result = x/y
 }
displayValue = roundAccurately(result, 4);
firstOperator = result;
secondOperator = 0;
data3 = []
}


function clearDisplay(){
    firstOperator = null;
    secondOperator = null;
    displayValue = "0";
    data = [];
    data2 = [];
    data3 = [];
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}


function inputDecimal(){
if(secondOperator == null || secondOperator == 0 ){
displayValue = `${firstOperator + "."}`;
}
else{
    displayValue = `${secondOperator + "."}`;
    }
}