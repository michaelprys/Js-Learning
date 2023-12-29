'use strict';

const numberOfFilms = +prompt('How many films did you watch already');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const q1 = prompt('Your last movie?');
const q2 = prompt('How do you star it?');

personalMovieDB.movies[q1] = q2;

console.log(personalMovieDB);
