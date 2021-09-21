const express = require('express');
const path = require('path');

//Init App
const app = express();

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', (req, res) => {
    //html filename
    res.render('index', {
        title: 'Hello',
    });
});

//Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
