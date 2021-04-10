module.exports = (app) => {

    const questionsService = require('../services/questions/questions-service')

    const findAllQuestions = (req, res) => {
        const questions = questionsService.findAllQuestions();
        res.send(questions)
    }

    const findQuestionsForQuiz = (req, res) => {
        const qid = req.params['quizId']
        const questions = questionsService.findQuestionsForQuiz(qid)
        res.send(questions)
    }

    const findQuestionById = (req, res) => {
        const quid = req.params['questionId'];
        const question = questionsService.findQuestionById(quid);
        res.send(question);
    }

    app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz);
    app.get('/api/quizzes/:quizId/:questionId', findQuestionById);
    app.get('/api/questions', findAllQuestions);
}