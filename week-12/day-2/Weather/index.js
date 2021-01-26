
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.resolve(__dirname + '/public')));

const forecasts = [
    {
      varos: 'Seattle',
      helyszin: 'Washington, United States',
      idojaras: [
        { homerseklet: 11, icon: 'felhos', uzenet: 'Teljes szürkeség.' },
        { homerseklet: 11, icon: 'felhos', uzenet: 'Inkább maradj ágyban.' },
        { homerseklet: 13, icon: 'felhos', uzenet: 'Uncsi...' },
        { homerseklet: 12, icon: 'felhos', uzenet: 'Még mingig uncsi...' },
        { homerseklet: 13, icon: 'reszben_felhos', uzenet: 'Nem túl napos.' },
      ],
    },
    {
      varos: 'Miami',
      helyszin: 'Florida, United States',
      idojaras: [
        { homerseklet: 33, icon: 'sunny', uzenet: 'Forróság.' },
        { homerseklet: 35, icon: 'sunny', uzenet: 'Túl nagy hőség!' },
        { homerseklet: 34, icon: 'sunny', uzenet: 'Napos.' },
        { homerseklet: 34, icon: 'sunny', uzenet: 'Strandidő!' },
        { homerseklet: 35, icon: 'sunny', uzenet: 'Napsütés.' },
      ],
    },
    {
      varos: 'Barcelona',
      helyszin: 'Spain',
      idojaras: [
        { homerseklet: 19, icon: 'sunny', uzenet: 'Napsütés.' },
        { homerseklet: 15, icon: 'reszben_felhos', uzenet: 'Nem túl napos.' },
        { homerseklet: 17, icon: 'sunny', uzenet: 'Egyelőre szép az idő.' },
        { homerseklet: 16, icon: 'esos', uzenet: 'Rihanna - Umbrella' },
        { homerseklet: 18, icon: 'sunny', uzenet: 'Ismét napos.' },
      ],
    },
    {
      varos: 'London',
      helyszin: 'United Kingdom',
      idojaras: [
        { homerseklet: 4, icon: 'snowy', uzenet: 'Legyen már vége a télnek.' },
        { homerseklet: 7, icon: 'esos', uzenet: 'Ugye van nálad esernyő?' },
        { homerseklet: 10, icon: 'esos', uzenet: 'Megint esos.' },
        { homerseklet: 9, icon: 'esos', uzenet: 'Uncsi...' },
        { homerseklet: 11, icon: 'esos', uzenet: 'Uncsi... Megint.' },
      ],
    },
    {
      varos: 'Budapest',
      helyszin: 'Hungary',
      idojaras: [
        { homerseklet: 12, icon: 'reszben_felhos', uzenet: 'Megint felhos.' },
        { homerseklet: 16, icon: 'esos', uzenet: 'Túl nedves.' },
        { homerseklet: 18, icon: 'reszben_felhos', uzenet: 'Végre nap.' },
        { homerseklet: 16, icon: 'reszben_felhos', uzenet: 'Nem túl napos.' },
        { homerseklet: 19, icon: 'reszben_felhos', uzenet: 'Elmegy.' },
      ],
    },
  ];


app.get('/', (req, res) => {
    res.render('home', {
        name: req.query.name ? req.query.name : "Guest",
    });
});

app.get('/test', (req, res) => {
    res.send('My first endpoint válaszol :-) ');
});

// A szerver működik és hallgatózik a 3000-s porton :-)
app.listen(port, () => {
    console.log(`Server listening port:${port}`);
});