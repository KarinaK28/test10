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

if (personalMovieDB.count < 10) {
    console.log(`you have seen ${personalMovieDB.count} films `);
    alert(`you have seen ${personalMovieDB.count} films `);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log(`you have seen ${personalMovieDB.count} films `);
    alert(`you have seen a lot of films - ${personalMovieDB.count} `);
} else if (personalMovieDB.count >= 30){
    console.log(`you have seen ${personalMovieDB.count} films `);
    alert(`you are a movie buff lot of films - ${personalMovieDB.count} `);
} else {
    console.log(`error `);
    alert(`error`);
}

 for (let i = 0; i < 2; i ++) {
    const answ1 = prompt('What is the best Film111?', ' '),
          answ2 = prompt('How much 0-10 point?', ' ');

    if (answ1 != null && answ2 != null && answ1 != ' ' && answ2 != ' ' && answ1.length < 50 && answ2.length < 50) {
        personalMovieDB.movies[answ1] = answ2;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
   
}

console.log(personalMovieDB);


