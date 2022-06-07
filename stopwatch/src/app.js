let seconds = 0;
let minutes = 0;
let hours = 0;
const appendSeconds = document.querySelector(".num-sec");
const appendMinutes = document.querySelector(".num-min");
const appendHours = document.querySelector(".num-hour");

const btnStart = document.querySelector('.btn-start');
const btnReset = document.querySelector('.btn-reset');

let intervalId;

// 시작버튼 눌렀을 때
btnStart.addEventListener('click', function(){
  
  if( btnStart.id == 'btn-start'){
    btnStart.src = './src/images/button/start-default.png';
    btnStart.id = "btn-stop";
    btnReset.src = './src/images/button/reset-default.png';
  
  } else {
    
  }
})

