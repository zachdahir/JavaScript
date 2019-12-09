/*
============================================
; Title: Assignment 2.4
; Author: Zach Dahir
; Date: 12-7-19
; Description: Say "hello Zach Dahir!"
;===========================================
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 2.3"));


//Creating functions

function fullName(firstName, lastName){
  return firstName + " " + lastName;
}

function dateWriter(year, month, day){
    return month + "/" + day + "/" + year;
}

function formatNumber(number, numberOfFixedPositions){
  return number.toFixed(numberOfFixedPositions);
}

function convertToInt(age){
  return parseInt(age);
}

function convertToFloat(savings){
  return parseFloat(savings);
}


//Output

console.log("Hello my name is " + fullName("Zach", "Dahir") + "!");
console.log("Todays date is " + dateWriter(2019, 12, 8) + " and the current temperature is " + formatNumber(33.865, 2) + " degrees.");
console.log("I am " + convertToInt("23testConversion") + " years old and my savings account goal is " + convertToFloat("10000testConversion") + " dollars.");

 //Program end
