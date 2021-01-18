function attachEventsListeners() {
  document.getElementsByTagName("main")[0].addEventListener("click", getClickedEl)
  const daysInput = document.querySelector("#days");
  const hoursInput = document.querySelector("#hours");
  const minutesInput = document.querySelector("#minutes");
  const secondsInput = document.querySelector("#seconds");
  const daysToHours = (days) => Number((days * 24).toFixed(2));
  const hoursToMinutes = (hours) => Number((hours * 60).toFixed(2));
  const minutesToSeconds = (minutes) => Number((minutes * 60).toFixed(2));
  const secondsToMinutes = (seconds) => Number((seconds / 60).toFixed(2));
  const minutesToHours = (minutes) => Number((minutes / 60).toFixed(2));
  const hoursToDays = (hours) => Number((hours / 24).toFixed(2));

  function getClickedEl(e) {
    const targetId = e.target.id;
    switch (targetId) {
      case "daysBtn":
        let currentDaysInp = Number(daysInput.value);
        if (currentDaysInp > 0) {
          convertDays(currentDaysInp);
        }
        break;
      case "hoursBtn":
        let currentHoursInp = Number(hoursInput.value);
        if (currentHoursInp > 0) {
          convertHours(currentHoursInp);
        }
        break;
      case "minutesBtn":
        let currentMinutesInp = Number(minutesInput.value);
        if (currentMinutesInp > 0) {
          convertMinutes(currentMinutesInp);
        }
        break;
      case "secondsBtn":
        let currentSecondsInp = Number(secondsInput.value);
        if (currentSecondsInp > 0) {
          convertSeconds(currentSecondsInp);
        }
        break;

      default: console.log("Nothing");
        break;
    }
  }

  function convertDays(days) {
    let hrsValue = daysToHours(days);
    let minutesValue = hoursToMinutes(hrsValue);
    let secondsValue = minutesToSeconds(minutesValue);
    hoursInput.value = hrsValue;
    minutesInput.value = minutesValue;
    secondsInput.value = secondsValue;
  }
  function convertHours(hours) {
    let daysValue = hoursToDays(hours);
    let minutesValue = hoursToMinutes(hours);
    let secondsValue = minutesToSeconds(minutesValue);
    daysInput.value = daysValue;
    minutesInput.value = minutesValue;
    secondsInput.value = secondsValue;
  }
  function convertMinutes(minutes) {
    let secondsValue = minutesToSeconds(minutes);
    let hoursValue = minutesToHours(minutes);
    let daysValue = hoursToDays(hoursValue);
    daysInput.value = daysValue;
    hoursInput.value = hoursValue;
    secondsInput.value = secondsValue;

  }
  function convertSeconds(seconds) {
    let minutesValue = secondsToMinutes(seconds);
    let hoursValue = minutesToHours(minutesValue);
    let daysValue = hoursToDays(hoursValue);
    minutesInput.value = minutesValue;
    hoursInput.value = hoursValue;
    daysInput.value = daysValue;
  }

}