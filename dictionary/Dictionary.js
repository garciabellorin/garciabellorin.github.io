const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/dict')));
const getWord = require('./db/word');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dict', 'dict.html'));
});

app.post('/search', (req, res) => {
    let { word } = req.body;
    getWord(word)
        .then((def) => {
            if (!def || def.length === 0) throw 'Word Not found';
            res.status(200).send(def);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

const port = process.env.PORT || 8085;
app.listen(port, () => {
    console.log(`Dictionary app started http://localhost:${port}`);
});
