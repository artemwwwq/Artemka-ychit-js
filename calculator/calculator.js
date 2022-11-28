var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        alert('operation is unknow')
    };
    
    window.alert(result);
}

// function makeOperation(operationCode) {
//     switch(operationCode) {
//         case '+': 
//         result = getNumber1() + getNumber2(); 
//         break;
//         case '-': 
//         result = getNumber1() - getNumber2(); 
//         break;
//         case '*': 
//         result = getNumber1() * getNumber2(); 
//         break;
//         case '/': 
//         result = getNumber1() / getNumber2(); 
//         break;
//         default: 'unknow znachenye';
        
//     }
//     alert(result);
// }

// function makeOperation(operationCode) {
//     switch(operationCode) {
//         case '+': 
//         result = number1 + number2; 
//         break;
//         case '-': 
//         result = number1 - number2; 
//         break;
//         case '*': 
//         result = number1 * number2; 
//         break;
//         case '/': 
//         result = number1 / number2; 
//         break;
//         default: 'unknow znachenye';
        
//     }
//     alert(result);
// }

function onOperationButtonClick(eventObject) {
    var ckickenElement = eventObject.currentTarget;
    var operation = ckickenElement.innerHTML;
    makeOperation(operation); 
};



buttonPlus.addEventListener('click', onOperationButtonClick);
buttonMinus.addEventListener('click', onOperationButtonClick);
buttonMultiply.addEventListener('click', onOperationButtonClick);
buttonDevide.addEventListener('click', onOperationButtonClick);
