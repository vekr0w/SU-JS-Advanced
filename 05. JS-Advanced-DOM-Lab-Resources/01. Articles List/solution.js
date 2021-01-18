function createArticle() {
  const articleElement = document.querySelector("#articles")
  const titleElement = document.querySelector("#createTitle");
  const contentElement = document.querySelector("#createContent");
  let canCreate = titleElement.value !== "" && contentElement.value !== "";

  if (canCreate) {
    let headingElement = document.createElement('h3');
    let paragraphElement = document.createElement('p');
    headingElement.innerHTML = titleElement.value;
    paragraphElement.innerHTML = contentElement.value;
    articleElement.appendChild(headingElement);
    articleElement.appendChild(paragraphElement);
    titleElement.value = "";
    contentElement.value = "";
  }






}