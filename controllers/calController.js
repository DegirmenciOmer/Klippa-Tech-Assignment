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

    let hadAnyWrongAnswers = false,
      tempNumTry = 0,
      sessionQuestions = []
    await replyArray.forEach(async (q) => {
      const sessionDBQ = await Question.findById(q.id)

      const returnQuestion = {
        id: q.id,
        question: q.question,
        answer: q.answer,
        correct: false,
      }

      if (sessionDBQ.answer === q.answer) {
        console.log('CORRECT!')
        returnQuestion.correct = true
        hadAnyWrongAnswers = false
      } else {
        console.log('INCORRECT!')
        returnQuestion.correct = false
        hadAnyWrongAnswers = true
      }
      sessionQuestions.push(returnQuestion)
    })
    //sessionDB.numCorrect++
    console.log(tempNumTry)
    let newNumAttempts = sessionDB.numTry
    console.log(hadAnyWrongAnswers)
    if (hadAnyWrongAnswers) {
      newNumAttempts += 1
      await Calculation.updateOne(req.body.replyId, {
        ...(numTry = numTry++),
      }).save()
      res.json({
        numTry: tempNumTry,
        message: 'Try again',
      })
    } else {
      res.json({
        numTry: tempNumTry,
        message: 'Congratulations',
      })
    }
  } catch (error) {
    console.error(error)
  }
})

export { postCalculation }
