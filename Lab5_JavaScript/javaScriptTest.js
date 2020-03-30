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
    let multiple = 0;
    while (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            multiple *= arr[i];
        }

    }
    return multiple;
}

const arr1 = [1, 2, 3, 4];
console.log(sum(arr1));
console.log(multiply(arr1));

// Qn. 5 -> computing reverse of a string
function reverse(str) {
    for (i < str.length; i >= 0; i--) {
        return str.charAt(i);
    }
}
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
// Qn. 7 -> filtering longest in an array
function filterLongWords(arr = [], i) {
    let longWordsArr = [];
    longWordsArr = arr.filter(s => s.length > i);
    return longWordsArr;

}
// Qn. 8 -> finding largest between two numbers

function computeSumOfSquares(arr = []) {
    const arrNum = 0;
    arrNum = arr.map(num => num * num).reduce(function () {
        (accumulator, currentValue) => accumulator +
            currentValue;
    });

    return arrNum;
}
// Qn. 9 -> finding and printing only odd numbers
function printOddNumbersOnly(arr = []) {
    let oddArr = [];
    oddArr = arr.filter(function (num) { return (num % 2 !== 0) });
    oddArr = arr.filter(num => (num % 2 !== 0));
    return oddArr;
}
// Qn. 10 -> sum of squares of only even numbers 
function computeSumOfSquaresOfEvensOnly(arr = []) {
    const evenNum = 0;
    evenNum = arr.filter(num => (num % 2 === 0)).map(num => num * num).reduce(function () {
        (accumulator, currentValue) => accumulator +
            currentValue;
    });

    return evenNum;
}
// Qn. 11 -> re-implementing Qn. 4 using Array.reduce(...) function
function sumReduce(arr = []) {
    const sum = 0;
    sum = arr.reduce(function () { (accumulator, currentValue) => accumulator + currentValue; });
    return sum;
}

function multiplyReduce(arr = []) {
    let multiple = 0;
    const multiples = (accumulator, currentValue) => accumulator + currentValue;
    multiple = arr.reduce(multiples);
    return multiple;
}
// Qn. 12 -> finding largest between two numbers
function findSecondBiggest(arr = []) {
    let maxVal = (accumulator, currentValue) => accumulator > currentValue;
    const max = arr.reduce(maxVal);
    const ind = arr.indexOf(max);
    arr.splice(ind, 1)
    //now again max of left over elements in array
    //gives second largest number//
    const sndMax = arr.reduce(maxVal);
    return sndMax;

}
// Qn. 13 -> printing fibonacci sequence of given length
function printFibo(n, a, b){
    
}
// Qn. 14(A) -> finding largest between two numbers
// Qn. 14(B) -> finding largest between two numbers
// Qn. 15 -> finding largest between two numbers