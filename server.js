const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/whiteboard-02', {useNewUrlParser: true, useUnifiedTopology: true});
require('./db');

app.use(cookieParser());

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 3000
    }
    // cookie: {secure: true}
}))

// Configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controller/demos-controller')
demos(app)

// const quizzesController = require('./controller/quizzes-controller')
// quizzesController(app)

require('./controller/quizzes-controller')(app)
require('./controller/questions-controller')(app)
require('./controller/quiz-attempts-controller')(app)

app.listen(4000)