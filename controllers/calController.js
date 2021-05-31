import asyncHandler from 'express-async-handler'
import Calculation from '../models/calculationModel.js'
import Question from '../models/questionModel.js'

const postCalculation = asyncHandler(async (req, res) => {
  try {
    /**
     * TODO:
     * compare the results
     * if incorrect, numTry++
     * if numTry === 3 GAMEOVER
     * if correct, SUCCESS
     * start a new game
     */
    const replyArray = req.body.questions
    const sessionDB = await Calculation.findById(req.body.replyId)

    //const response = balblafunction(replyArray, sessionDB)

    //res.json(response)
    const hasWrongAnswer = await checkForWrongAnswer(replyArray)
    console.log(hasWrongAnswer)

    if (hasWrongAnswer) {
      console.log({ numberOfTries: sessionDB.numTry })

      let currentNumberOftries = sessionDB.numTry

      if (currentNumberOftries === 3) {
        return res.json({
          message: 'Game Over!',
        })
      } else {
        res.json({
          message: 'Try again',
        })
      }

      await Calculation.updateOne(sessionDB, {
        numTry: currentNumberOftries + 1,
      })
    } else {
      return res.json({
        message: 'Congratulations',
      })
    }
  } catch (error) {
    console.error(error)
  }
})

async function checkForWrongAnswer(questionsArray) {
  for await (let q of questionsArray) {
    const questionSession = await Question.findById(q.id)
    if (questionSession.answer !== q.answer) {
      return true
    }
  }
  return false
}

export { postCalculation }
