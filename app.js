var h1 = document.getElementsByTagName('h1')[0];
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var timeout;

var time = {
    hour: 0,
    minute: 0,
    second: 0
}

function getContent() {
    let hour = (time.hour ? (time.hour > 9 ? time.hour : "0" + time.hour) : "00");
    let minute = (time.minute ? (time.minute > 9 ? time.minute : "0" + time.minute) : "00");
    let second = (time.second > 9 ? time.second : "0" + time.second);

    return hour + ":" + minute + ":" + second;
}

function add() {

    time.second++;

    if (time.second >= 60) {

        time.second = 0;
        time.minute++;
        
        if (time.minute >= 60) {
            time.minute = 0;
            time.hour++;
        }
    }

    h1.textContent = getContent();

    timer();
}

function timer() {
    timeout = setTimeout(add, 1000);
}

timer();

startBtn.onclick = timer;

/* Stop button */
stopBtn.onclick = function() {
    clearTimeout(timeout);
}

/* Clear button */
resetBtn.onclick = function() {
    h1.textContent = "00:00:00";
    time.second = 0; time.minute = 0; time.hour = 0;
}