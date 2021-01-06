// Write a method which can read and parse a file 
// containing not so family friendly text. 
// The method must remove all the given words from the file 
// and return the amount of the removed words.

'use strict';
let fs = require('fs');
const fileName = "./content.txt"
let txtCont = readFile(fileName);

//counter for rudeWords
let countN = 0;

const rudeWords = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

//rendezem a "csúnya" szavakat, hogy a hosszúak legyenek elöl
rudeWords.sort();
rudeWords.reverse();

// végigmegyek kicserélem a rudeWords szavakat csillagokra
for (let i = 0; i < rudeWords.length; i++) {
    let values = doReplace(txtCont, rudeWords[i], "*".repeat(rudeWords[i].length))
    txtCont=values[0];
    countN +=values[1]
}

// az összes rudeWords szó első karakterét nagybetűsre cserélem
for (let i = 0; i < rudeWords.length; i++) {
    rudeWords[i] = rudeWords[i].charAt(0).toUpperCase() + rudeWords[i].slice(1);
}

// végigmegyek megint kicserélem a szavakat most a maradék nagybetűvel kezdődőket
for (let i = 0; i < rudeWords.length; i++) {
    let values = doReplace(txtCont, rudeWords[i], "*".repeat(rudeWords[i].length))
    txtCont=values[0];
    countN +=values[1]
}
console.log(countN);

function doReplace(text, originalWord, newWord) {
    let counterNum = 0;
    const originalWordLength = originalWord.length;
    for (let i = 0; i <= text.length - originalWordLength; i++) {
        let trans =(text.substr(i-1,1));
        if (trans.toLowerCase() === trans.toUpperCase()){
            if (text.substr(i, originalWordLength) === originalWord) {
                text = text.substr(0, i) + newWord + text.substr(i + originalWordLength, text.length);
                counterNum++;
            }
        }
    }
    return [text,counterNum];
}

function readFile(fileName) {
    if (fs.existsSync(fileName)) {
        return fs.readFileSync(fileName, 'utf8');
    }else{
        return ""
    }
}
