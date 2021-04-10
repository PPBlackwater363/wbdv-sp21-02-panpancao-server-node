const questions = require('./questions.json')

const createQuestion = () => {}

const findAllQuestions = () => {
    return questions;
}

const findQuestionById = (quid) => {
    return questions.find(question => question._id === quid);
}
const updateQuestion = () => {}
const deleteQuestion = () => {}

const createQuestionForQuiz = () => {}

const findQuestionsForQuiz = (quizId) => {
    return questions.filter(question => question.quizId === quizId);
}

module.exports = {
    findQuestionsForQuiz,
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
    createQuestionForQuiz
}
