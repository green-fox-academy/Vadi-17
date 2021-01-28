let text = "Ez egy példamondat. Remélem célbatalál."
let arrayVowel = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
resultTextArray = [];
let arrayText = text.split("");
for (let i = 0; i < arrayText.length; i++) {
    const element = arrayText[i];
    resultTextArray.push(element);    
    if(arrayVowel.includes(element.toLowerCase())){
        resultTextArray.push("v"+element.toLowerCase());
    }
}
console.log(resultTextArray.join(""));