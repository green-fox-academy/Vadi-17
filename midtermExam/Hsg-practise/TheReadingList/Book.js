'use strict';
class Book {
    title = '';
    genre = '';
    author = '';



    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

}

module.exports = Book;