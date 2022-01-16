"use strict";

let numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
while (numberOfNews == '') {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
}
let personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    private: false
};


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
let mess = '';
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
console.log(mess);
console.log(personalNewsDB);