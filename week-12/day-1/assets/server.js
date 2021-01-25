
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
// app.set('views', `${ __dirname }/views`);

app.use('/assets', express.static(path.resolve(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(`${ __dirname }/index.html`);
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
    console.log(`Server listening port:${port}`);
});