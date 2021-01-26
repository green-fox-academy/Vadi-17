
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

const cocktails = [
    {
        name: 'GIN FIZZ',
        price: 1520,
        contains: ['gin', 'sugar', 'lemon juice', 'soda'],
        isAlcoholic: true,
    },
    {
        name: 'BLOODY MARY',
        price: 1650,
        contains: ['vodka', 'tomato juice', 'spices'],
        isAlcoholic: true,
    },
    {
        name: 'SEX ON THE BEACH',
        price: 1850,
        contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'],
        isAlcoholic: true,
    },
    {
        name: 'CUBA LIBRE',
        price: 1850,
        contains: ['rum', 'cola', 'lime juice'],
        isAlcoholic: true,
    },
    {
        name: 'MOJITO',
        price: 1850,
        contains: ['rum', 'sugar', 'lime juice', 'soda water'],
        isAlcoholic: true,
    },
    {
        name: 'LONG ISLAND ICE TEA',
        price: 2450,
        contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'],
        isAlcoholic: true,
    },
    {
        name: 'VIRGIN MOJITO',
        price: 990,
        contains: ['sugar', 'lime juice', 'soda water'],
        isAlcoholic: false,
    },
    {
        name: 'SAFE SEX ON THE BEACH',
        price: 990,
        contains: ['peach schnapps', 'orange juice', 'cranberry juice'],
        isAlcoholic: false,
    },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.get('/*', (req, res) => {
    let alcoholFilter = req.query.alcohol;
    let filteredCocktails = [];
    if (alcoholFilter) {
        for (let cocktail of cocktails) {
            if (cocktail.contains.includes(alcoholFilter)) {
                filteredCocktails.push(cocktail);
            }
        }
        res.render('home', {
            alcoholList: alcoholList,
            cocktails: filteredCocktails
        });
    } else {
        res.render('home', {
            alcoholList: alcoholList,
            cocktails: cocktails
        });
    }
});

app.get('/test', (req, res) => {
    res.send('My first endpoint válaszol :-) ');
});

// A szerver működik és hallgatózik a 3000-s porton :-)
app.listen(port, () => {
    console.log(`Server listening port:${port}`);
});