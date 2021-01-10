'use strict';
const Book = require('./Book.js');
const BookList = require('./BookList.js');

const book1 = new Book('Visszatérés', 'sci-fi', 'Stanisław Lem');
const book2 = new Book('Alapítvány', 'sci-fi', 'Isaac Asimov');

const Vadi = new BookList("Vadi Book List");

Vadi.addBook(book1);
Vadi.addBook(book2);

console.log(book1);
console.log(book2);
console.log(Vadi);