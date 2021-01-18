function stopwatch() {
  const timeDivElement = document.querySelector("#time");
  const startButtonElement = document.querySelector("#startBtn");
  const stopButtonElement = document.querySelector("#stopBtn");
  document.getElementsByTagName("body")[0].addEventListener("click", startStopButton);
  let minutes = 0;
  let seconds = 0;
  let interval;

  function startStopButton(e) {
    if (e.target.innerHTML === "Start") {
      startButtonElement.disabled = true;
      stopButtonElement.disabled = false;
      interval = setInterval((startStopwatch), 10);
    }
    if (e.target.innerHTML == "Stop") {
      stopButtonElement.disabled = true;
      startButtonElement.disabled = false;
      clearInterval(interval);
      timeDivElement.innerHTML = "00:00";
      seconds = 0;
      minutes = 0;
    }
  }

  function startStopwatch() {
    const currentTimeArr = [...timeDivElement.innerHTML];
    seconds++;


    if (seconds <= 9) {
      currentTimeArr[4] = seconds;
      timeDivElement.innerHTML = currentTimeArr.join("");
    }
    if (seconds > 59) {
      //
      minutes++;
      seconds = 0;
      if (minutes <= 9) {
        currentTimeArr[1] = minutes;
        currentTimeArr[3] = seconds;
        currentTimeArr[4] = seconds;
      }
      if (minutes > 9) {
        let [mm, mt] = [...minutes.toString()];
        currentTimeArr[0] = mm;
        currentTimeArr[1] = mt;
        currentTimeArr[3] = seconds;
        currentTimeArr[4] = seconds;
      }
      timeDivElement.innerHTML = currentTimeArr.join("");
    }
    if (seconds > 9) {
      let [ss, st] = [...seconds.toString()];
      currentTimeArr[3] = ss;
      currentTimeArr[4] = st;
      timeDivElement.innerHTML = currentTimeArr.join("");
    }

  }
}