const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () =>
    questionsModel.find()

const findQuestionById = (qid) =>
    questionsModel.findById(qid)

const findQuestionsForQuiz = (qzid) =>
    questionsModel.find({quizId: qzid})
    // quizzesModel.findById(qzid)
    // .populate('questions')
    //     .then(quiz => quiz.questions)

const createQuestion = (question) =>
    questionsModel.create(question)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz,
    createQuestion
}