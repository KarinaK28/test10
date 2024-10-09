//'use strict';

const numberOfFilms = +prompt('How much films have you already seen?', ' ');
console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
 const answ1 = prompt('What is the best Film?', ' ');
const answ2 = prompt('How much 0-10 point?', ' ');
const answ3 = prompt('What is the best Film?', ' ');
const answ4 = prompt('How much 0-10 point?', ' ');

personalMovieDB.movies[answ1] = answ2;
personalMovieDB.movies[answ3] = answ4;

console.log(personalMovieDB);


