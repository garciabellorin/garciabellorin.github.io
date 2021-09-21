<<<<<<< HEAD
const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded({ extended: false });
app.use(express.static('./public'));

//set view engine

app.set("view engine","pug");

const questions=[
    {"qid":1, "sequence":"3, 1, 4, 1, 5","answer":9},
    {"qid":2, "sequence":"1, 1, 2, 3, 5","answer":8},
    {"qid":3, "sequence":"1, 4, 9, 16, 25","answer":36},
    {"qid":4, "sequence":"2, 3, 5, 7, 11","answer":13},
    {"qid":5, "sequence":"1, 2, 4, 8, 16","answer":32},
];

app.get('/',function(req,res){
    res.render('quiz',{questions:questions[0],score:0,step:0})
});

app.post('/',urlencodedParser,function(req,res){
    console.log(req.body);
    let data = req.body;
    let step=parseInt(data.step);
    let score=parseInt(data.score);
    let answer=parseInt(data.answer);
    if(step+1==questions.length){
        if(answer===questions[step].answer){
            score+=1;
        }
        res.render('result',{step:0,score:score});
    }else{
        if(answer===questions[step].answer){
            score+=1;
        }
        step+=1;
        res.render('quiz',{questions:questions[step],step:step,score:score})

    }
});

const PORT = process.envPORT || 5000;
=======
const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded({ extended: false });
app.use(express.static('./public'));

//set view engine

app.set("view engine","pug");

const questions=[
    {"qid":1, "sequence":"3, 1, 4, 1, 5","answer":9},
    {"qid":2, "sequence":"1, 1, 2, 3, 5","answer":8},
    {"qid":3, "sequence":"1, 4, 9, 16, 25","answer":36},
    {"qid":4, "sequence":"2, 3, 5, 7, 11","answer":13},
    {"qid":5, "sequence":"1, 2, 4, 8, 16","answer":32},
];

app.get('/',function(req,res){
    res.render('quiz',{questions:questions[0],score:0,step:0})
});

app.post('/',urlencodedParser,function(req,res){
    console.log(req.body);
    let data = req.body;
    let step=parseInt(data.step);
    let score=parseInt(data.score);
    let answer=parseInt(data.answer);
    if(step+1==questions.length){
        if(answer===questions[step].answer){
            score+=1;
        }
        res.render('result',{step:0,score:score});
    }else{
        if(answer===questions[step].answer){
            score+=1;
        }
        step+=1;
        res.render('quiz',{questions:questions[step],step:step,score:score})

    }
});

const PORT = process.envPORT || 5000;
>>>>>>> c8fcdee71ba7c66544caa5140194e5e6ef829de0
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));