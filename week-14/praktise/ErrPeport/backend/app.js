
import express from 'express';
import cors from 'cors';
// import SinglesRepository from './SinglesRepository.js';
// import singles from './data/singles.json'; // not working, still experimental feature


let backadat = JSON.parse('[{ "firstName": "Vadi","lastName": "A király"},{ "firstName": "Barbara","lastName": "Kunszt"},{ "firstName": "Jakab","lastName": "Hammer"},{ "firstName": "joacim","lastName": "Kurksz"}]');



const port = 3000;
const app = express();
app.use(express.json());
// kell mert különben nem látja egymást a két szerver
app.use(cors());

app.get('/users', (req, res) => {
    res.json({
        "users": [{
                "id": 1,
                "firstName": "Vadi",
                "lastName": "A király"
            },
            {
                "id": 2,
                "firstName": "Barbara",
                "lastName": "Kunszt"
            },
            {
                "id": 3,
                "firstName": "Mary",
                "lastName": "KunsAkárkizt"
            },
            {
                "id": 4,
                "firstName": "Brien",
                "lastName": "Anaszt"
            },
            {
                "id": 5,
                "firstName": "Daisy",
                "lastName": "Jakabos"
            }
        ]
    });
});

app.get('/tickets', (req, res) => {
    res.json({
        "tickets": [{
                "id": 1,
                "reporter": "Egg",
                "manufacturer": "dell",
                "serial_number": 123456789,
                "description": "screen pixel error",
                "reported_at": "2018-01-10T23:00:00.000Z"
            },
            {
                "id": 2,
                "reporter": "Tom",
                "manufacturer": "lenovo",
                "serial_number": 987654321,
                "description": "touchpad is not working",
                "reported_at": "2018-01-17T23:00:00.000Z"
            },
            {
                "id": 3,
                "reporter": "Mary",
                "manufacturer": "dell",
                "serial_number": 365456789,
                "description": "screen pixel error",
                "reported_at": "2018-01-10T23:00:00.000Z"
            },
            {
                "id": 4,
                "reporter": "Brian",
                "manufacturer": "lenovo",
                "serial_number": 102654321,
                "description": "touchpad is not working",
                "reported_at": "2018-01-17T23:00:00.000Z"
            },
            {
                "id": 5,
                "reporter": "Daisy",
                "manufacturer": "dell",
                "serial_number": 769654321,
                "description": "touchpad is not working",
                "reported_at": "2018-01-17T23:00:00.000Z"
            }
        ]
    });
});








app.get('/singles', (req, res) => {
    // const repository = new SinglesRepository();
    // const singles = repository.getSingles();
    res.json(backadat);
    // res.json(singles);
});
// What is our idea of a perfect date?

app.post('/singles', (req, res) => {
    const single = req.body;
    console.log(single);
    const repository = new SinglesRepository();
    const createdSingle = repository.create(single);
    if (createdSingle === false) {
        res.status(500).send();
        return;
    }
    res.json(createdSingle);
});

// /singles/2
app.put('/singles/:ide', (req, res) => {
    // update single by ide
    const singleId = req.params.ide;
    const singleToBeUpdated = req.body;

    const repository = new SinglesRepository();
    const newSingle = repository.update(singleId, singleToBeUpdated);
    if (newSingle === false) {
        res.status(500).send();
        return;
    }
    res.json(newSingle);
});

app.delete('/singles/:id', (req, res) => {
    const singleId = req.params.id;
    const repository = new SinglesRepository();
    const deletedSingle = repository.delete(singleId);
    if (deletedSingle === false) {
        res.status(500).send();
        return;
    }
    res.json(deletedSingle);
});

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});