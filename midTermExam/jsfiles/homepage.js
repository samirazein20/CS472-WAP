
"use strict"

$(function () {

    
        
});


function displayClock() {
    let d = new Date();
    // let d2 = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    document.getElementById('clock').innerHTML = d;
    setTimeout(displayClock, 1000);

}