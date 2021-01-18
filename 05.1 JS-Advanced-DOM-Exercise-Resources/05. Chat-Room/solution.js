function solve() {
  document
    .querySelector("#send")
    .addEventListener("click", sendButtonClicked);

  function sendButtonClicked(e) {
    const chatMessagesEl = document.querySelector("#chat_messages");
    let chatInputEelement = document.querySelector("#chat_input");
    if (chatInputEelement.value != "") {
      const newDivElement = document.createElement("div");
      newDivElement.classList.add("message", "my-message");
      newDivElement.innerHTML = chatInputEelement.value;
      chatInputEelement.value = "";
      chatMessagesEl.appendChild(newDivElement);
    }
  }
}


