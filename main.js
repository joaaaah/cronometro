"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;

let cron;

document.form_main.start.onload = () => start();
function start() {
    cron = setInterval(() => { timer(); }, 10);
}
function timer() {
    if ((milisecond += 10) == 1000) {
        milisecond = 0;
        second++;
        
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
document.getElementById('hour').innerText = returndata(hour);
document.getElementById('minute').innerText = returndata(minute);
document.getElementById('second').innerText = returndata(second);
document.getElementById('milisecond').innerText = returndata(milisecond);


}
function returndata(input) {
    return input > 10 ? input : `0${input}`
}