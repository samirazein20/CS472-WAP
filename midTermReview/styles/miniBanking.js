"use strict";
$(document).ready(function() {
    $("#bankAccountForm").on("submit", function(event) {
        event.preventDefault();
        const accountNum = $("#accountNo").val();
        const customerName = $("#customerName").val();
        const accountType = $("#account").val();

        console.log(`Account Number: ${accountNum} | customer Name: ${customerName} | Account Type: ${accountType}`)
        accounts.push({
            number: accountNum,
            name: customerName,
            type: accountType
        });
        console.log(accounts);
        accsList();

    });
    let accounts = [];

    function accsList() {
        const displayInfo = $("#displayInfo");
        for (let i = 0; i < accounts.length; i++) {
            $("#list1").text(`${accounts["number"]} | ${accounts[1]} | ${accounts[2]}`);
        }
        // $("#list1").text(`${accountNum} | ${customerName} | ${accountType}`);
        displayInfo.css("display", "block");
    };
});