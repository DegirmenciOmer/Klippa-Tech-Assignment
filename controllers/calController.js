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

    let hadAnyWrongAnswers = false
    let tempNumTry = 0
    await replyArray.map(async (q) => {
      const sessionDBQ = await Question.findById(q.id)

      const returnQuestion = {
        answer: q.answer,
        correct: false,
        id: q.id,
      }

      if (sessionDBQ.answer === q.answer) {
        console.log('CORRECT!')
        returnQuestion.correct = true
      } else {
        console.log('INCORRECT!')
        returnQuestion.correct = true
        hadAnyWrongAnswers = true

        if (tempNumTry === 0) {
          tempNumTry = 1
          // const newCalculation = await new Calculation({
          //   questions: refinedQs,
          // }).save()
        }
        //tempNumTry++
      }
    })
    //sessionDB.numCorrect++
    console.log(tempNumTry)

    res.json({
      numTry: tempNumTry,
      message: 'Try again',
    })
  } catch (error) {
    console.error(error)
  }
})

export { postCalculation }
