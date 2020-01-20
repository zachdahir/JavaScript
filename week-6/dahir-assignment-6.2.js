/*
============================================
; Title: Assignment 6.2
; Author: Zach Dahir
; Date: 1-13-20
; Description: try/catch assignment
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 6.2
  Today's Date
  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 6.2"));

//try block
try {
  var x = 7;
  var y = 4;
  var sum = x + y;

//if statement checking if sum is less than 10
if(sum > 10) throw "Sum is greater than 10";
console.log(sum)
}

//catch block for if sum exceeds 10
catch(err){
  console.log("Catch clause: " + err);
}

//finally block displaying end message
finally{
  console.log("Finally clause reached...");
}

//end program
