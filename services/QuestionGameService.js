import Question from '../models/questionModel.js'
import Session from '../models/sessionModel.js'

async function checkForWrongAnswer(questionsArray) {
  for await (let q of questionsArray) {
    const questionSession = await Question.findById(q.id)
    if (questionSession.answer !== q.answer) {
      return true
    }
  }
  return false
}

const checkForWrongAnswersWithFeedback = (questionsArray, dbQuestions) =>
  questionsArray.map((question) => {
    const dbQuestion = dbQuestions.find(
      (dbQuestion) => dbQuestion.id === question.id
    )

    if (dbQuestion.answer !== question.answer) {
      return {
        questionId: question.id,
        feedback: `Answer "${question.answer}" is not correct`,
      }
    }
  })

async function responseHandler(answersArray, answersFromDB) {
  const dbQuestions = await Question.find({})

  console.log({ dbQuestions })

  const feedback = await checkForWrongAnswersWithFeedback(
    answersArray,
    dbQuestions
  )
  if (feedback.length > 0) {
    console.log({ numberOfTries: answersFromDB.numTry })

    let currentNumberOftries = answersFromDB.numTry

    if (currentNumberOftries === 3) {
      return {
        feedback,
        message: 'Game Over!',
      }
    } else {
      await Session.updateOne(answersFromDB, {
        numTry: currentNumberOftries + 1,
      })

      return {
        feedback,
        message: 'Try again',
      }
    }
  } else {
    return {
      message: 'Congratulations',
    }
  }
}

export { responseHandler }
