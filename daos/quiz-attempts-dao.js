const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    questions.forEach(question =>
        question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions)
    return (100 * numberOfCorrectQuestions / questions.length).toFixed(2)
}
const findAttemptsForQuiz = (qzid) =>
    quizAttemptsModel.find({quiz: qzid})

const createAttempt = (qid, attempt) => {
    return quizAttemptsModel.create({
        quiz: qid,
        answers: attempt,
        score: scoreQuiz(attempt)
    })
}


module.exports = {createAttempt, findAttemptsForQuiz}