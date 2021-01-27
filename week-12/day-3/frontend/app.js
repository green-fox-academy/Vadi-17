
'use strict';

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());

//Do until
//POST /dountil/{action} végpontot, ami egy számot kap
app.post('/dountil/:mathOperation', (req, res) => {
  let mathOperation = req.params.mathOperation;
  const number = req.body.until;
  let outputObject
  if (!number) {
    outputObject = {
      "error": "Please provide a number!"
    }
  } else if (mathOperation === 'sum') {
    let outputNumber = (number / 2) * (number + 1)
    outputObject = {
      "result": parseInt(outputNumber)
    }
  } else if (mathOperation === 'factor') {
    let factorNumber = 1;
    for (let i = 1; i <= number; i++) {
      factorNumber *= i;
    }
    outputObject = {
      "result": parseInt(factorNumber)
    }
  }
  //Objektből string
  res.send(JSON.stringify(outputObject));
});

// A hozzáfűzés
app.get('/appenda/:input', (req, res) => {
  let input = req.params.input;
  let outputObject
  if (input) {
    outputObject = {
      "appended": input + "a"
    }
    res.status(200);
  } else {
    res.status(404);
  }
  //Objektből string
  res.send(JSON.stringify(outputObject));
});

//GET /greeter végpont
// /például: /greeter?name=Petike&title=student
app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let outputObject
  if (name && title) {
    outputObject = {
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    }
    res.status(200);
  }
  if (!name && !title) {
    outputObject = {
      "error": "Please provide a name and a title!"
    }
    res.status(400);
  }
  if (name && !title) {
    outputObject = {
      "error": "Please provide a title!"
    }
    res.status(400);
  }
  if (!name && title) {
    outputObject = {
      "error": "Please provide a name!"
    }
    res.status(400);
  }
  //Objektből string
  res.send(JSON.stringify(outputObject));
});

//megduplázza a bemenetként kapott számot!
// /doubling?input=15
app.get('/doubling', (req, res) => {
  let inputNumber = req.query.input;
  let outputObject
  if (inputNumber) {
    outputObject = {
      "received": parseInt(inputNumber),
      "result": parseInt(inputNumber) * 2
    }
  } else {
    outputObject = {
      "error": "Please provide an input!"
    }
  }
  //Objektből string
  res.send(JSON.stringify(outputObject));
});

// A /-re érkező GET kérés a statikus index.hu.html fájlt renderelje:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.hu.html'));
});

// egyszerű teszt
app.get('/test', (req, res) => {
  res.send('My first endpoint OK :-) ');
});

app.listen(PORT, () => {
  console.log(`Server is running and listen on port ${PORT}.`);
});