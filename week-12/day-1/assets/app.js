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

app.set('view engine', 'ejs');
app.set('views', `${ __dirname }/views`);

// app.use(express.static('public'));
// app.use('/static', express.static('public'));
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

app.get('/myFirstEndpoint' ,(req, res) =>{
    res.send('My first endpoint válaszol');
})
// http://localhost:3000/endpointWithQueryString?greeting=hello&name=Greenfox
app.get('/endpointWithQueryString', (req, res) => {
    let html = '<ul>';

    for (let key in req.query) {
        html += `<li>${ key }: ${ req.query[key] }</li>`;
    }

    html += '</ul>';

    res.send(html);
});

// http://localhost:3000/greet/:name
app.get('/greet/:name', (req, res) => {
    let html = `<h1>Hellóbelló ${ req.params.name }!</h1>`;

    res.send(html);
});
// A szerver működik és hallgatózik a 3000-s porton :-)
app.listen(port, () => {
    console.log(`Server${port}`);
});