'use strict';

class BookList {
    constructor(owner) {
        this.owner = owner;
        this.read = 0;
        this.notRead = 0;
        this.nextBook = '';
        this.booksArray = [];
    }
    addBook(book) {
        this.booksArray.push(book);
    }
    getLastBook() {
        return this.booksArray[this.booksArray.length - 1];
    }
    getbooksArray() {
        return this.booksArray;
    }

}

module.exports = BookList;