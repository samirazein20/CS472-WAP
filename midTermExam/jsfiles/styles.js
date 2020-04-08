"use strict";
$(function() {
    let month = document.getElementById("month");
    let currentDate = document.getElementById("currentDate");
    const today = new Date();
    const current_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const current_month = (today.getMonth() + 1) + '-' + today.getDate();
    const current_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    month.innerHTML = "<span>" + current_month + "</span>";
    currentDate.innerHTML = "<span>" + current_date + ":" + "</span><span>" + current_time + "</span>";

    current_time

    let counter = 0;
    $("#censusForm").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let citizenId = $("#citizenId").val();
        let ssn = $("#ssn").val();
        let state = $("#state").val();
        let isSenior = $("input[name='senior']:checked").val();

        counter = counter + 1;
        let displayTable = $("#displayTableInfo");
        $("#tbody").append(
            "<tr><th scope='row'> " + counter + " </th><td>" +
            citizenId + "</td><td>" +
            ssn + "</td><td>" +
            name + "</td><td>" +
            state + "</td><td>" +
            isSenior + "</td></tr>"
        );
        displayTable.css("display", "block");
    });

});