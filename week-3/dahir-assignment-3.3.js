/*
============================================
; Title: Assignment 3.3
; Author: Zach Dahir
; Date: 12-12-19
; Description: Changing code from if else to switch
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/

//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 3.3"));

//declaring variable
var eventKeyCode = 13

//switch to check for event key code previously declared
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
      break;
  case 16:
    console.log('The shift key was pressed.');
      break;
  case 32:
    console.log('The spacebar key was pressed.');
      break;
  case 8:
    console.log('The backspace / delete key was pressed.');
      break;
  default:
    console.log('Unrecognized key.');
}
