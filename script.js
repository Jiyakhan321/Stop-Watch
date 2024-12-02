let isRunning = false;
let startTime;
let updatedTime;
let difference;
let tInterval;
let runningTime = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function startStopwatch() {
    if (!isRunning) {
        startTime = new Date().getTime() - runningTime;
        tInterval = setInterval(updateTime, 1);
        startStopButton.innerHTML = 'Stop';
        isRunning = true;
    } else {
        clearInterval(tInterval);
        startStopButton.innerHTML = 'Start';
        isRunning = false;
        runningTime = difference;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    isRunning = false;
    runningTime = 0;
    timeDisplay.innerHTML = '00:00:00';
    startStopButton.innerHTML = 'Start';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    timeDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;
}

startStopButton.addEventListener('click', startStopwatch);
resetButton.addEventListener('click', resetStopwatch);
