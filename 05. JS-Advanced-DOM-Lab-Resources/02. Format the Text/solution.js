function solve() {
  let outputElement = document.querySelector("#output");
  const input = document.querySelector("#input").innerHTML
    .split(".")
    .filter(Boolean);
  let tempStorage = [];



  input.forEach((element, index) => {

    if (tempStorage.length < 3) {
      tempStorage.push(element);
    } else if (tempStorage.length < 3 && input.length - 1 == index) {
      addParagraph(tempStorage, outputElement);

    } else {
      addParagraph(tempStorage, outputElement);
      tempStorage = [];
      tempStorage.push(element);
      if (input.length - 1 == index) {
        addParagraph(tempStorage, outputElement);
      }
    }

  });


  function addParagraph(arr, el) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = arr.join('.');
    el.appendChild(paragraph);
  }

}
