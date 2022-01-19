"use strict";

let numberOfNews;
let personalNewsDB = {
    count: 0,
    news: {},
    actors: {},
    genres: [],
    StartProject: function () {
        personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");
        while (personalNewsDB.count == '') {
            personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");
        }
    },
    rememberNews: function () {
        let lastViewNew, gradeFilm, arr = [];
        for (let i = 0; i < personalNewsDB.count; i++) {
            lastViewNew = prompt(`${i + 1} - postni nomini kiriting: `);
            arr.push(lastViewNew);
            while ((lastViewNew == null) || (lastViewNew == '') || (lastViewNew.length > 50)) {
                lastViewNew = prompt(`${i + 1} - postni nomini kiriting: `);
                arr.push(lastViewNew);
            }
            gradeFilm = +prompt("Unga qancha baho bergan bo'lar edingiz?");
            while (gradeFilm == '') {
                gradeFilm = +prompt("Unga qancha baho bergan bo'lar edingiz?");
            }
            personalNewsDB.news[lastViewNew] = gradeFilm;
        }
        console.log(arr);
    },
    toggleVisibleMyDB: function (hidden) {
        if (hidden) {
            personalNewsDB.private = false;
        }
        personalNewsDB.private = true;
    },
    writeGenres: function () {
        let genresList, arr = [];
        for (let i = 0; i < 3; i++) {
            genresList = prompt(`Sizning ${i + 1} - sevimli janringiz: `);
            arr.push(genresList);
            while (genresList == '' || genresList == null) {
                genresList = prompt(`Sizning ${i + 1} - sevimli janringiz: `);
                arr.push(genresList);
            }
        }
        return arr;
    },
    ShowPersonLevel: function (count) {
        let mess;
        if (count < 10) {
            mess = "Juda oz sonli yangliklar o'qilibdi";
        }
        else if (30 > count > 10) {
            mess = "Siz klassik tomoshabinsiz";
        }
        else if (count > 30) {
            mess = "Siz yangiliklar ishqibozisiz";
        }
        else {
            mess = "Xato yuz berdi";
        }
        console.log(mess);
    },
    private: false
};

personalNewsDB.StartProject();
personalNewsDB.rememberNews();
personalNewsDB.toggleVisibleMyDB(personalNewsDB.private);
let array = personalNewsDB.writeGenres();
array.forEach(function (item, index, arr) {
    console.log(item);
});
personalNewsDB.ShowPersonLevel(personalNewsDB.count);
