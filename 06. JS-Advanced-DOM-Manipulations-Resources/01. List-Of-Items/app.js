function addItem() {
    const inputElement = document.querySelector("#newItemText");
    const itemsUlElement = document.querySelector("#items");

    if (inputElement.value != "") {
      let newLiElement = document.createElement("li");
      newLiElement.innerHTML = inputElement.value;
      itemsUlElement.appendChild(newLiElement);
      inputElement.value = "";
    }
}