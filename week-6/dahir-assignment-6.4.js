/*
============================================
; Title: Assignment 6.4
; Author: Zach Dahir
; Date: 1-13-20
; Description: Create an object literal ticket with a nested object literal person
;===========================================
*/

/*Expected output:
  FirstName LastName
  Assignment 6.4
  Today's Date
  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 6.4"));

//creating ticket object with nested person object
var ticket = {
      id: 105,
      name: "Ricky",
      dateCreated: new Date().toLocaleDateString(),
      priority: "high",

      person: {
        id: 101,
        firstName: "Bob",
        lastName: "Jones",
        jobTitle: "Programmer I"
      }
};

//outputting information for ticket object
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and was assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " " + "(" + ticket.person.jobTitle + ")");

//end program
