function solve() {
  const ulElement = document.querySelector("#dropdown-ul");
  const boxElement = document.querySelector("#box");
  document.querySelector("#dropdown").addEventListener("click", updateStatus);
  function updateStatus(e) {
    const styleClasslist = e.target.classList;
    if (styleClasslist.length > 0) {
      styleClasslist.remove("enable");
      ulElement.style.display = "none";
      boxElement.style.backgroundColor = "rgb(114, 112, 112)";

    } else {
      styleClasslist.add("enable");
      ulElement.style.display = "block";
    }
  }

  document.querySelector("#dropdown-ul").addEventListener("click", changeColor);
  function changeColor(e) {
    const currentColor = e.target.innerHTML;
    console.log(currentColor);
    boxElement.style.backgroundColor = currentColor;
  }
}