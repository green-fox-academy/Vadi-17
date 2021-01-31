'use strict';
import express from 'express';
const app = express();
const PORT = 8080;
app.use(express.json());

app.post('/translate/', (req, res) => {
    const text = req.body.text;
    const lang = req.body.lang;
    let outputObject;
    const arrayVowel = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    let resultTextArray = [];
    if (text && lang) {
        let arrayText = text.split("");
        for (let i = 0; i < arrayText.length; i++) {
            const element = arrayText[i];
            resultTextArray.push(element);
            if (arrayVowel.includes(element.toLowerCase())) {
                resultTextArray.push("v" + element.toLowerCase());
            }
        }
        resultTextArray=resultTextArray.join("");
        outputObject = {
            "text": resultTextArray, 
            "lang": "teve"
        }
    }else{
        outputObject = {
            "error": "Ezt nem tudom lefordítani!"
        }
    }
    res.send(JSON.stringify(outputObject));
});
app.listen(PORT, () => {
    console.log(`Server is running and listen on port ${PORT}.`);
});