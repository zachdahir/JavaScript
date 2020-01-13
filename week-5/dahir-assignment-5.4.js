/*
============================================
; Title: Assignment 5.4
; Author: Zach Dahir
; Date: 1-09-20
; Description: Create an array and use map function to create filtered arrays
;===========================================
*/

/*
  FirstName LastName
  Assignment 5.4
  Today's Date
  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven
  Rating: 10
  Composer: Mozart
  Rating: 9
  Composer: Bach
  Rating: 6
  Composer: Haydn
  Rating: 5
  Composer: Schubert
  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven
  Genre: Classical
  Composer: Mozart
  Genre: Classical
  Composer: Bach
  Genre: Classical
  Composer: Haydn
  Genre: Classical
  Composer: Schubert
*/

//Program start
//Importing header file

const header = require('../dahir-header.js');

//Entering parameters into the header display function

console.log(header.display("Zach", "Dahir", "Assignment 5.4"));

//declaring array of composers
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

//map to return string including rating and last name
var composerRatings = composers.map(function(ratings){
  return ("Rating: " + ratings.rating + "\n" + "Composer: " + ratings.lastName)
});

//map to return string including genre and last name
var composerGenre = composers.map(function(genres){
  return ("Genre: " + genres.genre + "\n" + "Composer: " + genres.lastName)
});

//Output
console.log("");
console.log("-- COMPOSER BY RATING --");

//forEach to iterate through the array
composerRatings.forEach(function(rating){
  console.log(rating);
});

console.log("");

console.log("-- COMPOSER BY GENRE --");

//forEach to iterate through the array
composerGenre.forEach(function(genre){
  console.log(genre);
});

//program end
