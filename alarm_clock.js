
var audio = new Audio('Shape-Of-You.mp3');
function play() {
  audio.play();
}

function stop(audio) {
  audio.pause();
  // audio.currentTime=0;
}
// to convert both the time obtained by the form and date element into 12-hour format
function convertTime() {
  // Get user-selected time from the input field
  const form = document.getElementById("myform");
  const userSelectedTime = form.elements["alarm_time"].value;
  // console.log(userSelectedTime);
  // Convert user-selected time to 12-hour format
  const userSelectedTimeObj = new Date(`${userSelectedTime}`);
  const formattedUserTime = userSelectedTimeObj.toLocaleTimeString('en-US', { day:'2-digit',year:'2-digit',month:'2-digit',hour:'numeric', minute: 'numeric',hour12: false }) +":" + "00"; 
  // console.log(formattedUserTime) ;

  
  return formattedUserTime;
}
async function alarm_buzzer() {
  var input_time = convertTime();
  // Get current time in 12-hour format
  const currentTimeObj = new Date();
  const formattedCurrentTime = currentTimeObj.toLocaleTimeString('en-US', {day:'2-digit',year:'2-digit',month:'2-digit', hour: 'numeric', minute: 'numeric',second:"numeric" ,hour12: false }) ;

  // let p = new Promise((resolve,reject)=>{
  //   setTimeout(() => {
  //     resolve(1);
  //   }, 1000);
  // })
  if (input_time == formattedCurrentTime) {
    // play the alarm ringtone
    // let c = await p;
    play();
    return 1;

  }
  // else {
  //   console.log("actual time : ", formattedCurrentTime);
  // }
}

let save = document.getElementById('f3');
save.addEventListener('click', async (e) => {
  e.preventDefault();
  setInterval(alarm_buzzer, 1000);
});





//************* */ clock **********************

let clock = document.getElementById('clock');
clock.innerHTML = ``;
function time(){
  
  const currentTimeObj = new Date();
  const CurrentTime = currentTimeObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true });
  
  clock.innerHTML = `<h1><p>${CurrentTime}</p></h1>`;
  // console.log(CurrentTime);
  }
  function clearscreen(){
    console.clear();
}
// setInterval(clearscreen,1000);
setInterval(time,1000);
  
