/*
============================================
; Title: Assignment 4.2
; Author: Zach Dahir
; Date: 12-18-19
; Description: Array of fruit
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.2
  Today's Date
  Apple
  Orange
  Banana
  Mango
  Pear
*/

//Program Start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 4.2"));

//Array declaration
var fruit = ["Apple", "Orange", "Bananas", "Mango", "Pear"]

//Function to display contents of array
function getFruit(arr){
  for (x = 0; x < arr.length; x++)
    console.log(arr[x]);
}

//Calling function and passing in array
getFruit(fruit);

//end program
