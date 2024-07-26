var hourspan = document.getElementById('hour')
var minutespan = document.getElementById('minute')
var secondspan = document.getElementById('second')
var amorpmspan = document.getElementById('amorpm')

function changeTime() {
    var date = new Date()
    var hours = date.getHours()
    hourspan.textContent = hours

    var minutes = date.getMinutes()
    minutespan.textContent = minutes

    var seconds = date.getSeconds()
    secondspan.textContent = seconds

    if (hours === 0) {
        amorpm = "AM"
    }
    else if (hours > 0 && hours < 12) {
        amorpm = "AM"
    }
    else {
        amorpm = "PM"
    }
    amorpmspan.textContent = amorpm
}
setInterval(changeTime, 1000)