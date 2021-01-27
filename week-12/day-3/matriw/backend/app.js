
import express from 'express';
import SinglesRepository from './SinglesRepository.js';
// import singles from './data/singles.json'; // not working, still experimental feature

const port = 3000;
const app = express();
app.use(express.json());


app.get('/singles', (req, res) => {
    const repository = new SinglesRepository();
    const singles = repository.getSingles();
    res.json(singles);
});
// What is our idea of a perfect date?

app.post('/singles', (req, res) => {
    const single = req.body;
    const repository = new SinglesRepository();
    const createdSingle = repository.create(single);
    if (createdSingle === false) {
        res.status(500).send();
        return;
    }
    res.json(createdSingle);
});

// /singles/2
app.put('/singles/:id', (req, res) => {
    // update single by id
    const singleId = req.params.id;
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