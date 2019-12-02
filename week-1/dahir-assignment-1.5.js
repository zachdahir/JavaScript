/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 11-29-19
; Modified By: Zach Dahir
; Description: Employee Records
;===========================================
*/ 

// Start program

// Variable assignments

var firstName1 = "Thomas";
var lastName1 = "Shelby";
var address1 = "19195 Kings Road";
var payRate1 = 65.17;
var hireDate1 = new Date (2015 , 7, 8);

var firstName2 = "Alfie";
var lastName2 = "Solomons";
var address2 = "46875 Camden Road";
var payRate2 = 43.75;
var hireDate2 = new Date (2015 , 8, 25);

var firstName3 = "Johnny";
var lastName3 = "Doggs"
var address3 = "66536 Watery Lane";
var payRate3 = 32.96;
var hireDate3 = new Date (2015 , 9, 14);

// Variable outputs

console.log("First name: " + firstName1);
console.log("Last name: " + lastName1);
console.log("Address: " + address1);
console.log("Pay rate: " + payRate1.toFixed(1));
console.log("Hire date: " + hireDate1.toLocaleDateString());

console.log("First name: " + firstName2);
console.log("Last name: " + lastName2);
console.log("Address: " + address2);
console.log("Pay rate: " + payRate2.toFixed(1));
console.log("Hire date: " + hireDate2.toLocaleDateString());

console.log("First name: " + firstName3);
console.log("Last name: " + lastName3);
console.log("Address: " + address3);
console.log("Pay rate: " + payRate3.toFixed(1));
console.log("Hire date: " + hireDate3.toLocaleDateString());

// End Program