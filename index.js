const stopwatch = document.getElementById('display');

const playbtn = document.getElementById('playbtn');
const pausebtn = document.getElementById('pausebtn');
const resetbtn = document.getElementById('resetBtn');

let startTime;
let elapsedTime = 0;
let stopwatchInterval;

playbtn.addEventListener('click',startStopwatch);
pausebtn.addEventListener('click',stoptopwatch);
resetbtn.addEventListener('click',resetStopwatch);

function startStopwatch(){
startTime = Date.now() - elapsedTime;

stopwatchInterval = setInterval(function printTime(){
    elapsedTime = Date.now() - startTime;
    timeToString(elapsedTime);
    showButton('pause');
})
}

function timeToString(time){
    let diffinhr = time/3600000;
    let hh = Math.floor(diffinhr);

    let diffinmm = (diffinhr - hh)*60;
    let mm = Math.floor(diffinmm);

    let diffinsec = (diffinmm - mm)*60;
    let ss = Math.floor(diffinsec);

    let diffinms = (diffinsec - ss)*1000;
    let ms = Math.floor(diffinms);

    let formattedHH = hh.toString().padStart(2, '0');
    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSEC = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(3, '0');

    stopwatch.innerHTML = `${formattedHH}:${formattedMM}:${formattedSEC}:${formattedMS}`;
}
function stoptopwatch(){
   clearInterval(stopwatchInterval);
   showButton('play');
}

function resetStopwatch(){
    clearInterval(stopwatchInterval);
    showButton("play");
    stopwatch.innerHTML = `00:00:00:000`;
    elapsedTime = 0;
}

function showButton(button){
    if(button === 'play'){
        playbtn.style.display = 'block';
        pausebtn.style.display = 'none';
    }else {
        playbtn.style.display  = 'none';
        pausebtn.style.display = 'block';
    }
}

