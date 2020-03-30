"use strict";

let countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	const today = new Date();
    const current_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const current_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + current_date + "</span><span>" + current_time + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

