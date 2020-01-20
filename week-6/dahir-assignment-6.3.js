/*
============================================
; Title: Assignment 6.3
; Author: Zach Dahir
; Date: 1-13-20
; Description: Create an object literal for a ticketing system
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 6.3
  Today's Date
  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 6.3"));

//creating employee object
var employee = {
      id: 101,
      name: "Help Desk Support",
      requester: "Bob Jones"
};

//Outputting information from  employee object
console.log("id: " + employee.id + ", name: " + employee.name + ", requester: " + employee.requester);

//program end
