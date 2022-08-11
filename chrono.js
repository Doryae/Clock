const hoursElem = document.getElementById("hour")
const minutesElem = document.getElementById("minutes")
const secondsElem = document.getElementById("seconds")
const start = document.getElementById("start")
const play = document.getElementById("play")
const pause = document.getElementById("pause")

let interval

let hours = 0
let minutes = 0
let seconds = 0

const updateChrono = () => {
  if (minutes === 59 && seconds === 59) {
    seconds = 0
    minutes = 0
    hours++
    if (hours < 10) {
      hours = "0" + hours
    }
  } else if (seconds === 59) {
    minutes++
    if (minutes < 10) {
      minutes = "0" + minutes
    }
    seconds = 0
  } else {
    seconds++
  }

  secondsElem.textContent = seconds =
    seconds < 10 ? "0" + seconds : seconds

  if (minutes === 0) {
    minutesElem.textContent = "00"
  } else {
    minutesElem.textContent = minutes
  }

  if (hours === 0) {
    hoursElem.textContent = "00"
  } else {
    hoursElem.textContent = hours
  }
}

let iteration = 0

start.addEventListener("click", (e) => {
  e.preventDefault()

  if (iteration === 0) {
    iteration++
    interval = setInterval(updateChrono, 1000)
    start.textContent = "reset"
    pause.classList.remove("invisible")
  } else {
    iteration = 0
    hours = 0
    minutes = 0
    seconds = 0

    hoursElem.textContent = "00"
    minutesElem.textContent = "00"
    secondsElem.textContent = "00"

    clearInterval(interval)
    start.textContent = "start"
    pause.classList.add("invisible")
  }
})

pause.addEventListener("click", (e) => {
  e.preventDefault()
  clearInterval(interval)
  pause.classList.add("invisible")
  play.classList.remove("invisible")
})

play.addEventListener("click", (e) => {
  e.preventDefault()
  interval = setInterval(updateChrono, 1000)
  pause.classList.remove("invisible")
  play.classList.add("invisible")
})
