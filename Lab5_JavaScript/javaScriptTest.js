/* Aurthor
 Zein Samira*/
"use strict";

// Qn. 1 -> finding largest between two numbers
function max(p1, p2) {
    if (p1 > p2) {
        return p1;
    } else {
        return p2;
    }
}
console.log(max(4, 3));
console.log(max(0, -1));

// Qn. 2 -> finding largest between three numbers
function maxOfThree(p1, p2, p3) {
    if (p1 > p2 && p1 > p3) {
        return p1;
    } else if (p2 > p1 && p2 > p3) {
        return p2;
    } else {
        return p3;
    }
}
console.log(maxOfThree(4, 3, 0));
console.log(maxOfThree(-1, 0, -2));
console.log(maxOfThree(5, 8, 10));
// Qn. 3 -> check if character is a  vowel
function isVowel(character) {
    const str = "a,e,i,o,u";
    for (let i = 0; i < str.length; i++) {
        let c = str.charAt(i);
        if (character === c) {
            return true;
        }
        return false;
    }
}

console.log(isVowel('c'));
console.log(isVowel('a'));

// Qn. 4 -> summing and multiplying numbers in an array

function sum(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(arr = []) {
    let multiple = 1;
    for (let i = 0; i < arr.length; i++) {
        multiple *= arr[i];
    }
    return multiple;
}

const arr1 = [1, 2, 3, 4];
console.log(sum(arr1));
console.log(multiply(arr1));

// Qn. 5 -> computing reverse of a string
function reverse(str) {
    let reversedWord = '';
    for (let i = str.length; i > 0; i--) {
        reversedWord += str[i - 1];
    }
    return reversedWord;
}
console.log("reverse string");
console.log(reverse("words"));
// Qn. 6 -> finding length of the longest word
function findLongestWord(arr = []) {
    let maxLength = 0;
    let longestStr;
    for (const str of arr) {
        if (str.length > maxLength) {
            maxLength = str.length;
            longestStr = str;
        }
    }
    return maxLength;
}
console.log("longest words length")
console.log(findLongestWord(["word", "words", "wording"]));
// Qn. 7 -> filtering longest in an array
function filterLongWords(arr = [], i) {
    let longWordsArr = [];
    longWordsArr = arr.filter(s => s.length > i);
    return longWordsArr;

}
console.log("longest words")
console.log(filterLongWords(["word", "words", "wording"], 6));
// Qn. 8 -> finding largest between two numbers

function computeSumOfSquares(arr = []) {
    let arrNum = arr.map(num => num * num).reduce((a, b) => a + b, 0);
    return arrNum;
}
console.log("sum of squares")
console.log(computeSumOfSquares([1, 2, 3, 4]));
// Qn. 9 -> finding and printing only odd numbers
function printOddNumbersOnly(arr = []) {
    let oddArr = [];
    oddArr = arr.filter(num => (num % 2 !== 0));
    return oddArr;
}
console.log("odd numbers only");
console.log(printOddNumbersOnly([1, 2, 3, 4]));
// Qn. 10 -> sum of squares of only even numbers 
function computeSumOfSquaresOfEvensOnly(arr = []) {
    let evenNum = 0;
    evenNum = arr.filter(num => (num % 2 === 0)).map(num => num * num).reduce((a, b) => a + b, 0);


    return evenNum;
}
console.log("sum of even squares only");
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4]));
// Qn. 11 -> re-implementing Qn. 4 using Array.reduce(...) function
function sumReduce(arr = []) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum;
}
console.log("sum using reduce");
console.log(sumReduce([1, 2, 3, 4]));

function multiplyReduce(arr = []) {
    let multiple = arr.reduce((a, b) => a * b, 1);
    return multiple;
}
console.log("mutiply using reduce");
console.log(multiplyReduce([1, 2, 3, 4]));
// Qn. 12 -> finding largest between two numbers
function findSecondBiggest(arr = []) {
    let biggestNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNum) {
            biggestNum = arr[i];
        }

    }
    let arrs = arr.filter(x => x != biggestNum);
    biggestNum = arrs[0];
    for (let i = 0; i < arrs.length; i++) {
        if (arrs[i] > biggestNum) {
            biggestNum = arrs[i];
        }
    }
    return biggestNum;
}
console.log("finding second biggest");
console.log(findSecondBiggest([1, 2, 3, 4]));
// Qn. 13 -> printing fibonacci sequence of given length
function printFibo(n, a, b) {
    if (n == 0) return []
    if (n == 1) return [a]
    let fib = [a, b]
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }
    return fib
}
console.log("-- Fibonnaci Series --")
console.log(printFibo(0, 0, 1))
console.log(printFibo(1, 0, 1))
console.log(printFibo(2, 0, 1))
console.log(printFibo(3, 0, 1))
console.log(printFibo(6, 0, 1))
console.log(printFibo(10, 0, 1))

// Qn. 14(A) -> Login form
function sumittedVals() {
    const website = document.getElementById("website").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Website: " + website);
    console.log("Email: " + email);
    console.log("Password: " + password);
}

//professor correction
// document.getElementById("formSubmit").addEventListener(
//         "submit",
//         function(event) {
//             event.preventDefault();
//             console.log(document.getElementById("email").value);
//         }
//     )
// Qn. 14(B) -> Add Product form
function productValues() {
    let message = ""
    const product = document.getElementById("productNumber").value;
    if (product != "") message += "Product Number: " + product + '\n';
    const quantity = document.getElementById("quantity").value;
    if (quantity != "") message += " Quantity: " + quantity + '\n';
    const name = document.getElementById("productName").value;
    if (name != "") message += " Product Name: " + name + '\n';
    const supplier = document.getElementById("supplier").value;
    if (supplier != "") message += " Supplier: " + supplier + '\n';
    const price = document.getElementById("unitPrice").value;
    if (price != "") message += " Unit Price: " + price + '\n';
    const dateS = document.getElementById("dateSupplied").value;
    if (dateS != "") message += " Date Supplied: " + dateS;
    alert(message);
}
// Qn. 15 -> clock
//please check clock .js in the clock folder.

function readTime() {
    let n = new Date();
    let t = `${n.getFullYear()} - ${n.getMonth()+1} - ${n.getDate()} ${n.getHours()} : ${n.getMinutes()} : ${n.getSeconds()}`;
    document.getElementById("newCount").innerHTML = t;

    setTimeout(readTime, 1000);
}