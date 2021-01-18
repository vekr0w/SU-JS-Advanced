function addItem() {
  const inputElement = document.querySelector("#newText");
  const itemsUlElement = document.querySelector("#items");
  itemsUlElement.addEventListener("click", (e) => {
    if (e.target.innerHTML == " [delete]") {
      let currentLiEl = e.target.parentElement.parentElement;
      itemsUlElement.removeChild(currentLiEl);
    }
  });


  if (inputElement.value != "") {
    let newLiElement = document.createElement("li");
    let newParagraphElement = document.createElement("p");

    newParagraphElement.innerHTML = inputElement.value;
    newLiElement.appendChild(newParagraphElement);
    itemsUlElement.appendChild(newLiElement);
    let newInnerParagraphEl = document.createElement("a");
    newInnerParagraphEl.innerHTML = " [delete]";
    newInnerParagraphEl.style.cursor = "pointer";
    newInnerParagraphEl.style.color = "red";
    newParagraphElement.appendChild(newInnerParagraphEl);
    inputElement.value = "";
  }


}