/*
============================================
; Title: Assignment 4.4
; Author: Zach Dahir
; Date: 12-18-19
; Description: Arrays of states using .sort and .filter
;===========================================
*/

/*
  FirstName LastName
  Assignment 4.4
  Today's Date
  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada
  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada
  -- SELECTED VALUE --
  Iowa
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 4.4"));


//Array declaration
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]

//declaring filtered array
var statesFiltered = states.filter(state => getState(state, "Iowa"))

//predicate for filter
function getState(states, string) {
  if (states === string) {
    return true;}
}

//Output
console.log("");
console.log("--Original Array--");

//for loop to display original array
for (x = 0; x < states.length; x++){
console.log(states[x]);
}

console.log("");
console.log("--Sorted Array--");

//for loop to display sorted array
for (x = 0; x < states.length; x++){
console.log(states.sort()[x]);
}

console.log("");
console.log("--Selected Value--");
console.log(statesFiltered[0]);
