
var operationButton = document.getElementsByClassName('operation-button');


var inputs1 = document.getElementById("number1");
var inputs2 = document.getElementById("number2");

// function makeOperation(operationCode) {
//     var number1 = Number(inputs1.value);
//     var number2 = Number(inputs2.value);
//     var result;

//     if (operationCode === '+') {
//         result = number1 + number2;
//     } else if (operationCode === '-') {
//         result = number1 - number2;
//     } else if (operationCode === '*') {
//         result = number1 * number2;
//     } else if (operationCode === '/') {
//         result = number1 / number2;
//     }
//     window.alert(result);
// }

function makeOperation(operationCode) {
  var number1 = Number(inputs1.value);
  var number2 = Number(inputs2.value);
  var result;
  switch (operationCode) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      "unknow znachenye";
  };
  alert(result);
};

function onOperationButtonClick(eventObject) {
  var ckickenElement = eventObject.currentTarget;
  var operation = ckickenElement.innerHTML;
  makeOperation(operation);
};



for (var i = 0; i < operationButton.length; i++) {
  var button = operationButton[i];
  button.addEventListener("click", onOperationButtonClick);
};

let i = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num++)
// } while (num <= 5);


for (let i = 1; i <=5; i++) {
    console.log(i);
}


let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}


for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) break;
        console.log(size);
        
	}
}

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break firstFor;
        }
        console.log(size);
    }
};