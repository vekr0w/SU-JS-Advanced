function toggle() {
  const buttonElement = document.querySelector(".button");
  const extraElement = document.querySelector("#extra");
  let extraElStyle = extraElement.style.display;
  let isStyleNone = extraElement.style.display == "" || extraElement.style.display == "none";
  if (isStyleNone) {
    buttonElement.innerHTML = "LESS";
    extraElement.style.display = "block";
  } else {
    buttonElement.innerHTML = "MORE";
    extraElement.style.display = "none";
  }
}