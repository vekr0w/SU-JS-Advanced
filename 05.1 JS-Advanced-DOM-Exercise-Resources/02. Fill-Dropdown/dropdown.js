function addItem() {
  const textElement = document.querySelector("#newItemText");
  const valueElement = document.querySelector("#newItemValue");

  const isButtonValid = textElement.value != "" && valueElement.value != "";
  if (isButtonValid) {
    const menuElement = document.querySelector("#menu");
    let newOptionElement = document.createElement("option");
    newOptionElement.innerHTML = textElement.value;
    newOptionElement.value = valueElement.value;
    menuElement.appendChild(newOptionElement);
    textElement.value = "";
    valueElement.value = "";
  }

}