let seconds = 0;
const appendSeconds = document.querySelector(".num-sec");
const appendMinutes = document.querySelector(".num-min");
const appendHours = document.querySelector(".num-hour");

const btnStart = document.querySelector('.btn-default');
const btnReset = document.querySelector('.btn-reset-disabled');

let intervalId;
const src = './src/images/button/';

// 시작버튼 눌렀을 때
btnStart.addEventListener('click', function(){
  
  // default에서 눌렀을 때 stop으로 변환
  if( btnStart.id == 'btn-default'){
    btnStart.src = `${src}pause.png`;
    btnStart.id = "btn-stop";
    
    start()
  } else if (btnStart.id == 'btn-stop'){ // pause 일때 누르면 default로 변환
    btnStart.src = `${src}start-default.png`;
    btnStart.id = "btn-default";
    stop()
  }
})

// reset 버튼 눌렀을 때
// btnReset.addEventListener('click', function(){
//   if( btnReset.id == 'btn-reset-disabled'){
//     btnReset.src = `${src}reset-default.png`;
//     btnReset.id == 'btn-reset'

//   } else if( btnReset.id == 'btn-reset-default'){
//     btnReset.src = `${src}reset-default.png`;
//   }
// })

function timer() {
  seconds ++;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600 )/ 60);
  let secs = seconds % 60;

  if( secs < 10 ){
    appendSeconds.textContent = `0${secs}`;
  } else {
    appendSeconds.textContent = secs;
  }

  if( mins < 10) {
    appendMinutes.textContent = `0${mins}`;
  } else {
    appendMinutes.textContent = mins;
  }

  if( hours < 10) {
    appendHours.textContent = `0${hours}`;
  } else {
    appendHours.textContent = hours;
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