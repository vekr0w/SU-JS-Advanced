function create(words) {
  const contentDivElement = document.querySelector("#content");
  contentDivElement.addEventListener("click", makeVisible);
  words.forEach(element => {
    createDiv(element);
  });

  function createDiv(elem) {
    let newPar = document.createElement("p");
    let newDiv = document.createElement("div");
    newDiv.classList.add("content-div")
    newPar.innerHTML = elem;
    newPar.style.display = "none";
    newDiv.appendChild(newPar);
    contentDivElement.appendChild(newDiv);
  }

  function makeVisible(e) {
    if (e.target.classList[0] == "content-div") {
      console.log(e.target.firstElementChild);
      e.target.firstElementChild.style.display = "block";
    }
  }
}