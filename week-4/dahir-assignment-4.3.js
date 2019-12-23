/*
============================================
; Title: Assignment 4.3
; Author: Zach Dahir
; Date: 12-18-19
; Description: Vehicle array with function to check array for value
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 4.3
  Today's Date
  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus
  -- SELECTED VALUE --
  Motorcycle
  -- SELECTED VALUE --
  Bus
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 4.3"));

//Initalizing vehicle array
var vehicle = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]

//Function to iterate through loop while checking for entered value
function getValue(arr, val){
  for(x = 0; x < arr.length; x++)
      if (arr[x] === val){
        console.log(val);
      }
}

//break line
console.log("");
console.log("-- DISPLAYING ARRAY ITEMS --");

//For loop to display contents of array
for(x = 0; x < vehicle.length; x++){
    console.log(vehicle[x]);
}

//break line
console.log("");

console.log("-- SELECTED VALUE --");
//calling getValue function to get Motorcycle
getValue(vehicle, "Motorcycle");

//break line
console.log("");

console.log("-- SELECTED VALUE --");
//calling getValue function to get Bus
getValue(vehicle, "Bus");

//end program
