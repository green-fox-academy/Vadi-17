import express from 'express';
import cors from 'cors';

const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/search', (req, res) => {
    res.json({
        "result": "ok",
        "data": [
            {
                "license": "HMZ-140",
                "brand": "Audi",
                "model": "A8",
                "year": 2016,
                "color": "red"
            },
            {
                "license": "RB-4417",
                "brand": "Citroe",
                "model": "26",
                "year": 2004,
                "color": "blame"
            },
            {
                "license": "RB-4541",
                "brand": "LADA",
                "model": "2300",
                "year": 1999,
                "color": "pink"
            },
            {
                "license": "DT-9873",
                "brand": "AUDI",
                "model": "100",
                "year": 2017,
                "color": "white metal"
            },
            {
                "license": "KYZ-417",
                "brand": "Peugeot",
                "model": "206",
                "year": 2009,
                "color": "green"
            },
            {
                "license": "DT-5355",
                "brand": "BMW",
                "model": "Z4",
                "year": 2011,
                "color": "purple"
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});