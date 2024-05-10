const display = document.querySelector(".output input");
const buttons = document.querySelectorAll('input[type="button"]');

let currentValue = "";
let prevValue = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.value;

    switch (buttonValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        currentValue += buttonValue;
        display.value = currentValue;
        break;
      case "+":
      case "-":
      case "x":
      case "÷":
        prevValue = currentValue;
        operator = buttonValue;
        currentValue = "";
        break;
      case "=":
        calculate(prevValue, currentValue, operator);
        break;
      case ".":
        if (!currentValue.includes(".")) {
          currentValue += buttonValue;
          display.value = currentValue;
        }
        break;
      case "C":
        currentValue = "";
        prevValue = "";
        operator = "";
        display.value = "0";
        break;
    }
  });
});

function calculate(prev, current, op) {
  let result;
  const prevNum = parseFloat(prev);
  const currNum = parseFloat(current);

  switch (op) {
    case "+":
      result = prevNum + currNum;
      break;
    case "-":
      result = prevNum - currNum;
      break;
    case "x":
      result = prevNum * currNum;
      break;
    case "÷":
      result = prevNum / currNum;
      break;
  }

  display.value = result;
  currentValue = result.toString();
  prevValue = "";
  operator = "";
}
