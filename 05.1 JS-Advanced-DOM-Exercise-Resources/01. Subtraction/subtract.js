function subtract() {
  const firstValue = document.querySelector("#firstNumber").value++;
  const secondValue = document.querySelector("#secondNumber").value++;
  const resultDiv = document.querySelector("#result");
  let subtractionResult = firstValue - secondValue;
  resultDiv.innerHTML = subtractionResult;
}