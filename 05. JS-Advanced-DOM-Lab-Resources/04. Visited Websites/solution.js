function solve() {
  let buttonsDiv = document
    .querySelector(".middled")
    .addEventListener("click", doStuff);

  function doStuff(e) {
    const parentDivElement = e.target.parentElement;
    if (parentDivElement.tagName === "A") {
      const paragraphElement = parentDivElement.parentElement.lastElementChild;
      updateCounter(paragraphElement);
    }
  }
  function updateCounter(paragraphEl) {
    let stringArr = paragraphEl.innerHTML.split(" ");
    stringArr[1] = Number(stringArr[1]) + 1;
    let updatedString = stringArr.join(" ");
    paragraphEl.innerHTML = updatedString;
  }
}