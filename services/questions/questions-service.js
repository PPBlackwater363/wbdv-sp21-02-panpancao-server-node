// const questions = require('./questions.json')
//
// const questionsModel = require('../../models/questions/questions-model')
//
// const createQuestion = () => {}
//
// const findAllQuestions = () => {
//     // return questions;
//     return questionsModel.find()
// }
//
// const findQuestionById = (quid) => {
//     // return questions.find(question => question._id === quid);
//     return questionsModel.findById(quid)
// }
// const updateQuestion = () => {}
// const deleteQuestion = () => {}
//
// const createQuestionForQuiz = () => {}
//
// const findQuestionsForQuiz = (quizId) => {
//     return questionsModel.find({quizId: quizId})
//     // return questions.filter(question => question.quizId === quizId);
// }
//
// module.exports = {
//     findQuestionsForQuiz,
//     createQuestion,
//     findAllQuestions,
//     findQuestionById,
//     updateQuestion,
//     deleteQuestion,
//     createQuestionForQuiz
// }

const questionsDao = require('../../daos/questions-dao')

const findAllQuestions = () =>
    questionsDao.findAllQuestions()

const findQuestionById = (qid) =>
    questionsDao.findQuestionById(qid)

const findQuestionsForQuiz = (qid) =>
    questionsDao.findQuestionsForQuiz(qid)

const createQuestion = (question) =>
    questionsDao.createQuestion(question)

module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz, createQuestion}
