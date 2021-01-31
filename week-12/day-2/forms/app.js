import express, { urlencoded } from 'express';

// Ez azért mert json fájt írunk olvasunk
import fs from 'fs';
import path, { basename, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

// express urlencoded beépített fügvény kell a post methodusnak
// ez az első kérés amibe mindenki bele fog futni
// ha van benne form data akkor ezt feldolgozza és belerakja a req.body-ba
// utána abban az obijektumban, obijektumként használhatjuk
// Tehát feltölti a req.body-t amit majd lent a post-ban használunk
app.use(express.urlencoded({ extended: true }));

//get végpont sima per ezen hallgatózik a midlver függvény
// ki rendeleri az index.ejs fájlt
app.get('/', (req, res) => {
    res.render('index');
});
// Itt indul a regisztráció ezen a végponton kell kidolgozni a regisztrációt
// Tehát itt a /reg
app.get('/reg', (req, res) => {
    res.render('index', {
        // Itt kap paramétert a rendeleréshez
        isRegistration: true,
        isRegistrationSuccessful: false
    });
});

app.post('/reg', (req, res) => {

    // Az app.use(express.urlencoded({ extended: true }));-ban lett beállítva
    const user = req.body;

    // users.json fájl amiben egy tömbben vannak a felhasználók adatai
    try {
        // Kiolvassa a fájl tartalmát szépen mogoldva a dirrname-mel abszolult elérési úttal
        const usersFileContent = fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8');
        // a jasont fel-parse-olom létrejön belőle egy objekt
        const users = JSON.parse(usersFileContent);

        users.push(user);
        // visszaírom, felülírom az users jason fájlt, de
        // elötte visszaalakítom stringify-olom json formátumre
        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users));
    }
    catch(err) {
        //internál server error ha hiba van, utána vissza return
        res.status(500).send();
        return;
    }

    res.render('index', {
        isRegistration: true,
        isRegistrationSuccessful: true,
        username: user.username
    });
});

app.listen(port, () => {
    console.log(`App listens on port ${ port }`);
});