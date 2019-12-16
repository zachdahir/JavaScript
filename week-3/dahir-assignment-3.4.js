/*
============================================
; Title: Assignment 3.4
; Author: Zach Dahir
; Date: 12-12-19
; Description: Pattern Matching Functions
;===========================================
*/

/*Expected output
  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

//Program Start
//Importing header
const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 3.4"));

//Function to return a random number
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//Function to display if mismatch
function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

//Function to display if match
function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!");
}

//Declaring var that will be tested for match
var test = 8;

console.log("-- Do the numbers match game --");

//For loop to test for match 10 times
for(x = 0; x < 10; x++){
  var ranValue = randomNumber();

if (test === ranValue){
    logMatch(test, ranValue);
}
  else{
    logMismatch(test, ranValue);
}

}
//end program
