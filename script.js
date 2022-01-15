"use strict";

let numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
let personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    private: false
};


let lastViewNew = prompt("Oxirgi ko'rgan yangiliklarizdan biri?");
let gradeFilm = +prompt("Unga qancha baho bergan bo'lar edingiz?");
personalNewsDB.news[lastViewNew] = gradeFilm;
console.log(personalNewsDB);