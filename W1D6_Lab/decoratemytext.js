"use strict";

function display(){
    const textArea = document.getElementById("text")
    const size = textArea.style.fontSize;
    textArea.style.fontSize = "2em";
    // alert("hello world!!")
}

function changeDeco(){
    const textArea = document.getElementById("text")
    const check = document.getElementById("checkBox")
    if(check.checked === true){
        // alert("hello am checked")
        textArea.style.fontWeight = "bold"
        textArea.style.color = "#008000"
        textArea.style.textDecoration = "underline"
    }else{
        // alert("hello am not checked")
        textArea.style.fontWeight = "normal"
        textArea.style.color = "black"
        textArea.style.textDecoration = "none"
    }
    
}