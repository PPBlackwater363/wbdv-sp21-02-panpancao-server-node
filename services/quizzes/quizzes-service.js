// const quizzes = require('./quizzes.json')
//
// const quizzesModel = require('../../models/quizzes/quizzes-model');
//
// // TODO: Node.js Assignment
// const findAllQuizzes = () => {
//     // return quizzes
//     // return a promise
//     return quizzesModel.find()
// }
//
// const findQuizById = (quizId) => {
//     // return quizzes.find((quiz) => {
//     //     return quiz._id === quizId
//     // }
//     return quizzesModel
//         .findById(quizId)
//         .populate("questions")
//         .exec()
// }
//
// // console.log(findAllQuizzes())
// // console.log(findQuizById('123'))
//
// // TODO: MongoDB Assignment next week
// const createQuiz = () => {}
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
//
// module.exports = {
//     createQuiz,
//     findAllQuizzes,
//     updateQuiz,
//     findQuizById,
//     deleteQuiz
//}

const quizzesDao = require('../../daos/quizzes-dao')

const findAllQuizzes = () =>
    quizzesDao.findAllQuizzes()

const findQuizById = (qid) =>
    quizzesDao.findQuizById(qid)

const createQuiz = (quiz) =>
    quizzesDao.createQuiz(quiz)

module.exports = {findAllQuizzes, findQuizById, createQuiz}