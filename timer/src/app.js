let seconds = 0;
const appendSeconds = document.querySelector(".num-sec");
const appendMinutes = document.querySelector(".num-min");
const appendHours = document.querySelector(".num-hour");

const btnStart = document.querySelector('.btn-disabled');
const btnReset = document.querySelector('.btn-reset-disabled');

let intervalId;
const src = './src/images/button/';

// 시작버튼 눌렀을 때
btnStart.addEventListener('click', function(){
  
  // default에서 눌렀을 때 stop으로 변환
  if( btnStart.id == 'btn-disabled' ){
    btnStart.src = `${src}pause.png`;
    btnStart.id = "btn-pause";

    btnReset.src = `${src}reset-default.png`
    btnReset.id = 'btn-reset-default'
    start()

  } else if( btnStart.id == 'btn-pause' ){ // pause 일때 누르면 default로 변환
    btnStart.src = `${src}start-default.png`;
    btnStart.id = "btn-start";

    stop()
  } else if( btnStart.id == 'btn-start' ) {
    btnStart.src = `${src}pause.png`;
    btnStart.id = "btn-pause";
    start()
  }
})

// reset 버튼 눌렀을 때
btnReset.addEventListener('click', function(){
  if( btnReset.id == 'btn-reset-default'){
    btnReset.src = `${src}reset-disabled.png`;
    btnReset.id = 'btn-reset-disabled'

    btnStart.src = `${src}start-disabled.png`;
    btnStart.id = "btn-disabled";
    reset()
  }
})


function timer() {
  seconds ++;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600 )/ 60);
  let secs = seconds % 60;

  appendZero(secs, appendSeconds);
  appendZero(mins, appendMinutes);
  appendZero(hours, appendHours);
}

function appendZero( times, appendTimes ) { 
  if( times < 10) { 
    appendTimes.textContent = `0${times}`;
  } else {
    appendTimes.textContent = times;
  }
}

function start() {
  if(intervalId) {
    return
  }
  intervalId = setInterval(timer, 1000);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  stop();
  seconds= 0;
  appendSeconds.textContent = '00';
  appendMinutes.textContent = '00';
  appendHours.textContent = '00';
}