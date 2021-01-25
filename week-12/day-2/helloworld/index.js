
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.resolve(__dirname + '/public')));

// kezdőoldal
app.get('/', (req, res) => {
    // jelenítse meg a `home.ejs`-t
    // res.render('home');
    res.render('home', {
        title: 'Hello World',
        test: 'Ez is működik',
    });

});

app.get('/test', (req, res) => {
    res.send('My first endpoint válaszol :-) ');
});

// A szerver működik és hallgatózik a 3000-s porton :-)
app.listen(port, () => {
    console.log(`Server listening port:${port}`);
});