"use strict";
let numberOfNews;
function StartProject() {   
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
    while (numberOfNews == '') {
        numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
    }
}
StartProject();
let personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    private: false
};

let lastViewNew, gradeFilm;
function rememberNews() {
    for (let i = 0; i < numberOfNews; i++) {
        let lastViewNew = prompt(`${i + 1} - postni nomini kiriting: `);
        while ((lastViewNew == null) || (lastViewNew == '') || (lastViewNew.length > 50)) {
            lastViewNew = prompt(`${i + 1} - postni nomini kiriting: `);
        }
        let gradeFilm = +prompt("Unga qancha baho bergan bo'lar edingiz?");
        while (gradeFilm == '') {
            gradeFilm = +prompt("Unga qancha baho bergan bo'lar edingiz?");
        }
        personalNewsDB.news[lastViewNew] = gradeFilm;
    }    
}
rememberNews();


let mess = '';
function ShowPersonLevel() {
    if (personalNewsDB.count < 10) {
        mess = "Juda oz sonli yangliklar o'qilibdi";
    }
    else if (30 > personalNewsDB.count > 10) {
        mess = "Siz klassik tomoshabinsiz";
    }
    else if (personalNewsDB.count > 30) {
        mess = "Siz yangiliklar ishqibozisiz";
    }
    else {
        mess = "Xato yuz berdi";
    }
}

ShowPersonLevel();

        /* Show MyDB */
function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalNewsDB);
    }
}

console.log(mess);
// console.log(personalNewsDB);
let question;
function WriteYourGenres() {
    for (let i = 0; i < 3; i++) {
        question = prompt(`Sizning ${i + 1} - sevimli janringiz: `);
        personalNewsDB.genres[i] = question;
        console.log(personalNewsDB.genres[i]);
    }
}
WriteYourGenres();
console.log(personalNewsDB);