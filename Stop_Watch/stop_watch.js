var minute = document.getElementById("minute");
var sec = document.getElementById("sec");
var milSec = document.getElementById("milsec");
var start = document.getElementById("start");
var stop1 = document.getElementById("stop");
var reset = document.getElementById("reset");

let seconds = 0;
let milliseconds = 0;
let minu1 = 0;
let verify = true;


//---Start Button---
start.addEventListener("click", function () {
    verify = true;
    setInterval(() => {
        if (verify === true) {
            milliseconds += 1;
            // milSec.innerHTML = milliseconds;
            if (milliseconds == 99) {
                seconds += 1;
                sec.innerHTML = seconds+" <sub>s</sub>";
                milliseconds = 0;
            }
            if(seconds == 59){
                minu1 += 1;
                minute.innerHTML = minu1+" <sub>m</sub> :";
                seconds = 0;
                milliseconds = 0;
            }
        }
    },10);
});

//---Stop Button----
stop1.addEventListener("click", function () {
    verify = false;
});

//---Reset Button--
reset.addEventListener("click", function(){
    // milSec.innerHTML = 00;
    sec.innerHTML = 00;
    minute.innerHTML = "<sub></sub>";
    milliseconds = 0;
    seconds = 0;
    minu1 = 0;
    verify = false;
});