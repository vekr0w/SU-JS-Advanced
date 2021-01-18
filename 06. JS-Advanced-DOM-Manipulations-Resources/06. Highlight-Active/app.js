function focus() {
  document.getElementsByTagName("body")[0].addEventListener("click", main);

  function main(e) {
    if (e.target.parentElement.firstElementChild.tagName == "H1") {
      if (document.getElementsByClassName('focused')[0]) {
        removeFocus();
      }
      setFocus(e);
    }
  }

  function setFocus(e) {
    const selectedDiv = e.target.parentElement;
    selectedDiv.classList.add('focused');
  }

  function removeFocus() {
    let currentlyFocused = document.getElementsByClassName('focused')[0];
    currentlyFocused.classList.remove('focused');
  }


}