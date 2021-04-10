const express = require('express')
const app = express()

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


app.listen(4000)