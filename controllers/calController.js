import asyncHandler from 'express-async-handler'
import Calculation from '../models/calculationModel.js'
import Question from '../models/questionModel.js'

const postCalculation = asyncHandler(async (req, res) => {
  try {
    /**
     * TODO:
     * frontend: fix the issue onChange event
     * compare the results
     * if incorrect, numTry++
     * if numTry === 3 GAMEOVER
     * if correct, SUCCESS
     * start a new game
     */
    const reqQuestions = req.body.questions
    console.log(req.body)

    const sessionDB = await Calculation.findById(req.body.id)

    let sessionQuestions = []
    let tempNumTry = 0
    await reqQuestions.map(async (q) => {
      const sessionDBQ = await Question.findById(q.id)

      sessionQuestions.push(sessionDBQ)

      if (sessionDBQ.answer === q.answer) {
        console.log('CORRECT!')
      } else {
        console.log('INCORRECT!')

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
