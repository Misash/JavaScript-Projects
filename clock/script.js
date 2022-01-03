

//update every second
setInterval(showTime,1000);

function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
    hour = hour < 10 ? "0"+hour:hour;
    min = min < 10 ? "0"+min:min;
    sec = sec < 10? "0"+sec:sec;
    
    let currentTime = hour + " : " + min + " : " + sec


    let clock = document.getElementById("clock");
    clock.innerHTML = currentTime;
}

showTime();