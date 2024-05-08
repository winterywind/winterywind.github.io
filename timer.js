let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true;
let enteredTime = null;


function notify(){
    const notification = new Notification('Время вышло');
}

function startTimer(){
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer(){
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds);

    if (minutes === 0 && seconds === 0){
        clearInterval(timer);
        notify();

    } else if (!isPaused) {
        if(seconds > 0){
            seconds--;
        } else{
            seconds = 59;
            minutes --;
        }
    }

}

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2,'0')}`;
}

function togglePauseResume() {
    isPaused = !isPaused;

    if(isPaused){
        clearInterval(timer);

    } else {
        startTimer();
    }
}


function restartTimer(){
    clearInterval(timer);
    minutes = enteredTime || 25;
    seconds = 0;
    isPaused = true;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(minutes, seconds);
}

function chooseTime() {
    let newTime = prompt('Введите количество минут');
    if (!isNaN(newTime) && newTime > 0){
        enteredTime = parseInt(newTime);
        minutes = enteredTime;
        seconds = 0;
        isPaused = true;
        const timerElement = document.getElementById('timer');
        timerElement.textContent = formatTime(minutes, seconds);
        clearInterval(timer);
    } else {
        alert('Введите целое количество минут больше нуля');
    }
}
