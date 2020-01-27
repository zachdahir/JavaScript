/*
============================================
; Title: Assignment 7.2
; Author: Zach Dahir
; Date: 1-22-20
; Description: Constructor Functions
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 7.2
  Today's Date
  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 7.2"));

//constructor function for employee object taking 4 parameters
function employee(id, firstName, lastName, title){
  this.id = id,
  this.firstName = firstName,
  this.lastName = lastName,
  this.title = title
}

//creating 5 employee objects
var employees = [
  new employee(1, "Thomas", "Edison", "Software Engineer"),

  new employee(2, "Benjamin", "Franklin", "Programmer"),

  new employee(3, "Nikola", "Tesla", "Project Manager"),

  new employee(4, "Charles", "Babbage", "Product Manger"),

  new employee(5, "Alexander", "Bell", "Business Analyst")
];

//forEach to loop through each employee and display properties
employees.forEach(function(employee) {
  console.log(employee.id + " " + employee.firstName + " " + employee.lastName + " " + employee.title);
});

//end program
