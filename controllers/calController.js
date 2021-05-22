import asyncHandler from 'express-async-handler'
import Calculation from '../models/calculationModel.js'
import Question from '../models/questionModel.js'

const postCalculation = asyncHandler(async (req, res) => {
  try {
    const { reqQuestions, reqId } = req.body

    const session = await Calculation.findById(reqId)

    console.log(session)
    /**
     * TODO:
     * frontend: fix the issue onChange event
     * compare the results
     * if incorrect, numTry++
     * if numTry === 3 GAMEOVER
     * if correct, SUCCESS
     * start a new game
     */

    reqQuestions.map(async (q) => {
      const dbQ = await Question.findById(q.id)
      console.log(dbQ.answer, q.answer)
      if (dbQ.answer === q.answer) {
        console.log('CORRECT')
      } else {
        console.log('NOT CORRECT')
      }
    })
  } catch (error) {
    console.error(error)
  }
})

export { postCalculation }
