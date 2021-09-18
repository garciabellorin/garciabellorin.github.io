const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const { timeStamp } = require('console');


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/calculator.html');
});

app.post('/', (req, res) => {
    const num1 = Number(req.body.input1);
    const num2 = Number(req.body.input2);
    const operation = req.body.operation;
    var result = 0;
    var opr = '';

    switch (operation) {
        case 'plus':
            result = num1 + num2;
            opr = '&plus;';
            break;
        case 'minus':
            result = num1 - num2;
            opr = '&minus;';
            break;
        case 'times':
            result = num1 * num2;
            opr = '&times;';
            break;
        case 'divided':
            result = num1 / num2;
            opr = '&divide;';
            break;
    }
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
        <h4>Result</h4>
        <h4>${num1} ${opr} ${num2} = ${result}</h4>
        <a href="/">Another calculation</a>
        </div>
    </body>
    </html>`);
});


app.listen(3000, (res) => {
    console.log("Server running at 4000...");
});