"use strict";

function display() {
    // const textArea = document.getElementById("text")
    // const size = textArea.style.fontSize;
    // textArea.style.fontSize = "2em";
    // // alert("hello world!!")

    let txtSize = parseInt(document.getElementById('txtarea').style.fontSize);
    console.log('before : ' + txtSize);
    txtSize += 2;
    document.getElementById('txtarea').style.fontSize = txtSize + 'px';
    console.log('final : ' + txtSize);

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

}
