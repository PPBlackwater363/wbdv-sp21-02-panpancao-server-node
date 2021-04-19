// module.exports = (app) => {
//
//     const questionsService = require('../services/questions/questions-service')
//
//     const findAllQuestions = (req, res) => {
//         // const questions = questionsService.findAllQuestions();
//         questionsService.findAllQuestions().then((questions)=>{
//             res.send(questions)
//         });
//
//     }
//
//     const findQuestionsForQuiz = (req, res) => {
//         const qid = req.params['quizId']
//         // const questions = questionsService.findQuestionsForQuiz(qid)
//         questionsService.findQuestionsForQuiz(qid)
//             .then((questions)=>{
//             res.send(questions)
//         })
//     }
//
//     const findQuestionById = (req, res) => {
//         const quid = req.params['questionId'];
//         const question = questionsService.findQuestionById(quid);
//         res.send(question);
//     }
//
//     app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz);
//     app.get('/api/quizzes/:quizId/:questionId', findQuestionById);
//     app.get('/api/questions', findAllQuestions);


const questionsService = require('../services/questions/questions-service')

module.exports = function(app) {

    app.get('/api/quizzes/:qid/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['qid'])
        .then(questions => res.json(questions)))

    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(allQuestions => res.json(allQuestions)))

    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
        .then(question => res.json(question)))

    app.post('/api/create/question', (req, res) =>
        questionsService.createQuestion(req.body).then(quiz => res.send(quiz))
    )
}

