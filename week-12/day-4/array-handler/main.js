
'use strict';
import express from 'express';
const app = express();
const PORT = 8080;
app.use(express.json());

app.post('/dountil/', (req, res) => { 
    const what = req.body.what;
    const numbers = req.body.numbers;
    let outputObject
    if (!what) {
        outputObject = {
            "error": "Kérem, adja meg a műveletet!"
        }
    } else if (what === "sum") {
        outputObject = {
            "result": numbers.reduce((a, b) => a + b, 0)
        }

    } else if (what === "multiply") {
        outputObject = {
            "result": numbers.reduce((a, b) => a * b)
        }
    } else if (what === "double") {
        outputObject = {
            "result": outputObject = numbers.map((xx) => xx * 2)
        }
    } else {
        outputObject = {
            "error": "Nem definiált művelet!"
        }
    }
    res.send(JSON.stringify(outputObject));
});
app.listen(PORT, () => {
    console.log(`Server is running and listen on port ${PORT}.`);
});





