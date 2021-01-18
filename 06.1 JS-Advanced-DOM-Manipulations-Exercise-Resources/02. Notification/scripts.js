function notify(message) {
  // string 'Something happened!'
  const notificationElement = document.querySelector("#notification");
  notificationElement.innerHTML = message;
  notificationElement.style.display = "block";
  setTimeout(() => {
    notificationElement.style.display = "none";
  }, 2000);

}