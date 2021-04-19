const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuizzes = () =>
    quizzesModel.find()

const findQuizById = (quizId) =>
    quizzesModel.findById(quizId)

const createQuiz = (quiz) =>
    quizzesModel.create(quiz)

module.exports = { 
    findAllQuizzes,
    findQuizById,
    createQuiz
}