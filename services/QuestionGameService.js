import Question from '../models/questionModel.js'
import Session from '../models/sessionModel.js'

const checkForWrongAnswersWithFeedbacks = (questionsArray, dbQuestions) =>
  questionsArray.map((question) => {
    const dbQuestion = dbQuestions.find(
      (dbQuestion) => dbQuestion.id === question.id
    )

    if (dbQuestion.answer !== question.answer) {
      return {
        questionId: question.id,
        feedbacks: `Answer "${question.answer}" is not correct`,
      }
    }
  })

async function responseHandler(answersArray, answersFromDB) {
  const dbQuestions = await Question.find({})

  const feedbacks = (
    await checkForWrongAnswersWithFeedbacks(answersArray, dbQuestions)
  ).filter((x) => x)

  if (feedbacks.length > 0) {
    let currentNumberOftries = answersFromDB.numTry

    if (currentNumberOftries === 3) {
      return {
        feedbacks,
        message: 'Game Over!',
      }
    } else {
      await Session.updateOne(answersFromDB, {
        numTry: currentNumberOftries + 1,
      })

      return {
        feedbacks,
        message: 'Try again!',
      }
    }
  } else {
    return {
      message: 'Congratulations!!',
    }
  }
}

export { responseHandler }
