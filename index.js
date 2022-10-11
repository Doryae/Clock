const hoursElem = document.getElementById("hour")
const minutesElem = document.getElementById("minutes")
const secondsElem = document.getElementById("seconds")
const ampmElem = document.getElementById("ampm")

const updateClock = () => {
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()
  let ampm = "AM"

  if (hours > 12) {
    hours = hours - 12
    ampm = "PM"
  }

  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  hoursElem.textContent = hours
  minutesElem.textContent = minutes
  secondsElem.textContent = seconds

  ampmElem.textContent = ampm

  setTimeout(() => {
    updateClock()
  }, 1000)
}

updateClock()
