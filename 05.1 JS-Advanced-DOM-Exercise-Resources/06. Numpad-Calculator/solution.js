function solve() {
  const outputElement = document.querySelector("#expressionOutput");
  const resultElement = document.querySelector("#resultOutput");
  document.querySelector(".keys").addEventListener("click", onPadClick);
  function onPadClick(e) {
    const currentKeyPress = e.srcElement.value;
    const isOperator = currentKeyPress == "/" || currentKeyPress == "*" || currentKeyPress == "-" || currentKeyPress == "+";
    

    if (isOperator) {
      if (isValid) {
        
      }
    } else if (currentKeyPress == "=") {

    } else {
      outputElement.innerHTML += currentKeyPress;
    }

  }

  document.querySelector(".clear").addEventListener("click", () => {
    outputElement.innerHTML = "";
    resultElement.innerHTML = "";
  });

}