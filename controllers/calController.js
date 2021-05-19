import asyncHandler from 'express-async-handler'
import Calculation from '../models/calculationModel.js'
import Question from '../models/questionModel.js'

const postCalculation = asyncHandler(async (req, res) => {
  try {
    const { id, reply } = req.body
    const question = await Question.findById(id)

    if (question) {
      if (question.answer === parseInt(reply)) {
        const newCalculation = { session: {} }
        await Calculation.create(newCalculation, (err, result) => {
          if (err) {
            res.send(err)
          } else {
            console.log(result)
            res.send('Correct!')
          }
        })
      } else {
        res.send('Try again!')
      }
    } else {
      res.status(404).json({ message: 'Question not found' })
      throw new Error({ message: 'Question not found' })
    }
  } catch (error) {
    console.error(error)
  }
})

export { postCalculation }
