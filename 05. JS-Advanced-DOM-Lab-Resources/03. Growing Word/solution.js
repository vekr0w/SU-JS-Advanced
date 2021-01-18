function growingWord() {
  const paragraphElement = document.querySelector("#exercise").lastElementChild;
  const blueDiv = document.querySelector("#blueDiv");
  const greenDiv = document.querySelector("#blueDiv");
  const redDiv = document.querySelector("#blueDiv");
  const counter = paragraphElement.classList;

  if (counter[0] == 1) {
    console.log("Second iteration");
    counter.remove("1");
    counter.add("2");
    paragraphElement.style.backgroundColor = "green";
    paragraphElement.style.fontSize = "20px";

  } else if (counter[0] == 2) {
    console.log("Third iteration");
    counter.remove("2");
    paragraphElement.style.backgroundColor = "red";
    paragraphElement.style.fontSize = "30px";

  } else {
    console.log("First iteration");
    counter.add("1");
    paragraphElement.style.backgroundColor = "blue";
    paragraphElement.style.fontSize = "10px";
  }

}