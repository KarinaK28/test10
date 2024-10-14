//'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films have you already seen?', ' ');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films have you already seen?', ' ');
        
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



function writeYourGenres() {

 for (let i = 1; i <= 3; i ++) {
    personalMovieDB.genres[i -1] = prompt(`What is your favorite genres Number ${i}?`, '');
}
}

writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i ++) {
        const answ1 = prompt('What is the best Film?', ' ').trim(),
              answ2 = prompt('How much 0-10 point?', ' ').trim();
    
        if (answ1 != null && answ2 != null && answ1 != '' && answ2 != '' && answ1.length < 5 && answ2.length < 5) {
            personalMovieDB.movies[answ1] = answ2;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
}
}

rememberMyFilms() ;

function detectPersonalLevel() {
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
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden)
    {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
