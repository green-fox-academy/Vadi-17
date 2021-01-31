let text = `Ez itt egy próbamondat. Meg egy másik. Egyes grammatikákban a hangutánzó mondatszót az tekintik. Valami mondat. Teszt három szóval.`;
let sentencesArray = text.toLowerCase().split('. ');
let outputText = "";
let onomatopoeic = ["Khm-khm. ", "Hmm. ", "Cupp. ", "Hapci. ", "Hukk. "]
sentencesArray.forEach((sentenc) => {
    sentenc = sentenc.replace('.', '');
    let wordsForSentenc = sentenc.split(" ");
    let newSentenc = [];
    for (let i = 1; i <= wordsForSentenc.length; i += 2) {
        if (wordsForSentenc[i]) {
            newSentenc.push(wordsForSentenc[i]);
        }
        newSentenc.push(wordsForSentenc[i - 1]);
    }
    newSentenc = newSentenc.join(" ") + ". ";
    newSentenc = newSentenc.charAt(0).toUpperCase() + newSentenc.slice(1);
    outputText += newSentenc;
    for (let i = 0; i < (Math.floor(Math.random() * 2) + 1); i++) {
        outputText += onomatopoeic[Math.floor(Math.random() * 5)]
    }
})
console.log(outputText);