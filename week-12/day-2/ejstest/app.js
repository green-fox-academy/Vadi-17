// node.js
// inicializálni kell egy új projektet (package.json)
// express
// (nodemon) - figyeli a változásokat, és újraindítja az alkalmazást, ha megváltozott

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs');

//elvileg nem kell megadni. Az ejs a views-ban tárolja, keresi az ejs fájlokat.
app.set('views', `${ __dirname }/views`);

// app.use(express.static('public'));
// app.use('/static', express.static('public'));
// ezután a publicban található univerzális link helyett a static-ot tudom használni
app.use('/static', express.static(path.resolve(__dirname + '/public')));

// app.get('/cica.jpg', (req, res) => {
//     res.sendFile(`${ __dirname }/public/cica.jpg`);
// });

// app.get('/index.html', (req, res) => {
//     res.sendFile(`${ __dirname }/public/index.html`);
// });

app.get('/cica', (req, res) => {
    res.sendFile(`${ __dirname }/cica.html`);
});

app.get('/myFirstEndpoint', (req, res) => {
    res.send('My first endpoint válaszolt!');
});

app.get('/endpointWithQueryString', (req, res) => {
    let html = '<ul>';

    for (let key in req.query) {
        html += `<li>${ key }: ${ req.query[key] }</li>`;
    }

    html += '</ul>';

    res.send(html);
});

app.get('/greet/:name', (req, res) => {
    let html = `<h1>Hellóbelló ${ req.params.name }!</h1>`;

    res.send(html);
});

app.get('/cicaEJS', (req, res) => {

    const random = 1 + Math.floor(Math.random() * 5);

    // views/randomCica.ejs
    // kirendeleri a randomcica.ejs-t
    res.render('randomCica', { number: random });
});

app.get('/mentorEJS', (req, res) => {

    const random = 1 + Math.floor(Math.random() * 3);

    res.render('randomMentor', { number: random });
});

app.listen(port, () => {
    console.log(`Server listens on port ${ port }`);
});