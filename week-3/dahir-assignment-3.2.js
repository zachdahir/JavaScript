/*
============================================
; Title: Assignment 3.2
; Author: Zach Dahir
; Date: 12-12-19
; Description: Pattern Matching Functions
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//Starting program
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 3.2"));

//Variable Declarations

var test1 = "Truck";
var test2 = "Car";
var test3 = "Bike";
var test4 = "Bike";
var test5 = "Four";
var test6 = "Three";

//Match function
function match(arg1, arg2){
  if (arg1 === arg2)
    return true
  else
    return false
}

//Function to display if mismatch
function logMismatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do not match!");
}

//Function to display if match
function logMatch(arg1, arg2){
  console.log(arg1 + " and " + arg2 + " do match!");
}

//Output from match function
console.log(match("A", "B"));
console.log(match(2, 2));

//If else statements to check variables for match
if (test1 === test2){
    logMatch(test1, test2);
}
  else{
    logMismatch(test1, test2);
}

if (test3 === test4){
    logMatch(test3, test4);
}
  else{
    logMismatch(test3, test4);
}

if (test5 === test6){
    logMatch(test5, test6);
}
  else{
    logMismatch(test5, test6);
}
//end program


