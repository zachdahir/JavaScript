/*
============================================
; Title: Assignment 5.2
; Author: Zach Dahir
; Date: 1-09-20
; Description: Display an array of five foods using forEach()
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.2
  Today's Date
  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 5.2"));

//Declaring array of foods
var foods = ["Steak", "Burgers", "Burritos", "Tacos", "Wings"];

//calling the forEach function to iterate through the array and display each element
foods.forEach(function(food){
  console.log(food)
})

//end program
