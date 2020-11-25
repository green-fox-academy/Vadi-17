'use strict';
const fs = require('fs');
// Készíts egy függvényt, ami képes megváltoztatni egy fájl tartalmát
// Írja bele a Te nevedet egy sorban.
// A fájl neve 'my-file-txt' legyen.
// Ha a program nem tud írni a fájlba,
// Írja ki a következő hibaüzenetet: 'Unable to write file: my-file.txt'

writeSingleLineToFile('my-file.txt', 'Vadas István');

function writeSingleLineToFile(fileName, myName) {
    try {
        myName = '\n' + myName;
        fs.appendFile(fileName, myName, function (err) {
            if (err) throw err;
            console.log('Updated!');
        });
        return;
        
    }
    catch {
        console.log('Unable to write file: my-file.txt', err.message);
        return;
    }
}