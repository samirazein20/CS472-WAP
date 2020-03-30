"use strict";

function display() {
    // const textArea = document.getElementById("text")
    // const size = textArea.style.fontSize;
    // textArea.style.fontSize = "2em";
    // // alert("hello world!!")
    const txtSize = document.getElementById("txtarea");
    let fontSize = parseInt(window.getComputedStyle(document.getElementById("txtarea")).fontSize);
    txtSize.style.fontSize = fontSize + 2 + "px";

}

function displayAlert() {
    alert("Hello, world!");
}

function enlargingWithTime() {
    setInterval(display, 500);
}


function changeDeco() {
    const textArea = document.getElementById("text")
    const check = document.getElementById("checkBox")
    const body = document.getElementById("mybody")
    if (check.checked === true) {
        // alert("hello am checked");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "#008000";
        textArea.style.textDecoration = "underline";
        body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        // alert("hello am not checked")
        textArea.style.fontWeight = "normal"
        textArea.style.color = "black"
        textArea.style.textDecoration = "none"
        body.style.backgroundColor = "white";
    }

    function transformPigLatin() {
        const words = document.getElementById("txtarea").value;
        const arr = words.split(' ');
        for (let i=0;i<arr.length;i++) {
            var word = arr[i];
            if (word.length > 0 && isNaN(word)) {
                arr[i] = consonantCheck(word);
            }
        }
        document.getElementById("txtarea").value = arr.join(' ');
    
    }
    
    function consonantCheck(word) {
        let firstLetter = word.charAt(0)
        let result = ['a', 'e', 'i', 'o', 'u'].indexOf(firstLetter.toLowerCase());
        if (result >= 0) {
            word += 'ay';
        }
        else {
            word = word.substring(1);
            word += firstLetter + 'ay';
        }
        return word;
    }
    
    function transformMalkovitch() {
        const words = document.getElementById("txtarea").value;
        const arr = words.split(' ');
        for (let i=0;i<arr.length;i++) {
            var word = arr[i];
            if (word.length >= 5 && isNaN(word)) {
                arr[i] = "Malkovitch";
            }
        }
        document.getElementById("txtarea").value = arr.join(' ');
    }

}
