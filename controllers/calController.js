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
      tempNumTry = sessionDB.numTry,
      sessionQuestions = []
    console.log(tempNumTry, 'tempNumTry1')

    async function loopQuestions(wrongAns) {
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
          wrongAns = false
        } else {
          console.log('INCORRECT!')
          returnQuestion.correct = false
          wrongAns = true
          console.log(wrongAns, 'hadAnyWrongAnswers1')
          sessionQuestions.push(returnQuestion)
          return wrongAns
        }
      })
      console.log(wrongAns, 'hadAnyWrongAnswers2')
    }

    loopQuestions(hadAnyWrongAnswers)
    //console.log(sessionQuestions, 'sessionQuestions2')

    //sessionDB.numCorrect++
    console.log(tempNumTry++, 'tempNumTry2')
    let newNumAttempts = sessionDB.numTry
    console.log(hadAnyWrongAnswers, 'hadAnyWrongAnswers2')
    if (hadAnyWrongAnswers) {
      newNumAttempts += 1
      console.log(newNumAttempts, 'newNumAttempts')

      tempNumTry++
      console.log(tempNumTry, 'tempNumTry2')

      await Calculation.updateOne(req.body.replyId, {
        ...(numTry = newNumAttempts),
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
