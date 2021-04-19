// module.exports = (app) => {
//
//     const quizzesService = require('../services/quizzes/quizzes-service')
//
//     const findAllQuizzes = (req, res) => {
//         // const quizzes = quizzesService.findAllQuizzes()
//         quizzesService.findAllQuizzes().then((quizzes)=>{
//             res.send(quizzes)
//         })
//     }
//
//     const findQuizById = (req, res) => {
//         const qid = req.params['quizId']
//         // const quiz = quizzesService.findQuizById(qid)
//         quizzesService.findQuizById(qid).then((quiz) => {
//             res.send(quiz)
//         })
//     }
//
//     app.get('/api/quizzes', findAllQuizzes)
//     app.get('/api/quizzes/:quizId', findQuizById)
// }


const quizzesService = require('../services/quizzes/quizzes-service')

module.exports = function (app) {


    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))

    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))

    app.post('/api/create/quiz', (req, res) =>
        quizzesService.createQuiz(req.body).then(quiz => res.send(quiz))
    )

}