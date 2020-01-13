/*
============================================
; Title: Assignment 5.2
; Author: Zach Dahir
; Date: 1-09-20
; Description: Display composer objects using forEach
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 5.2"));

//creating array of composers
var composers = [
  {
    firstName: "Ludwig Van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
   {
    firstName: "Wolfgang Amadeus",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
   {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
   {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
   {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  },
];

//forEach to iterate through the array displaying last name, genre, and rating
composers.forEach(function(composer){
  console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating )
});

//end program
