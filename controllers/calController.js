import asyncHandler from 'express-async-handler'
import Calculation from '../models/calculationModel.js'
import Question from '../models/questionModel.js'

const postCalculation = asyncHandler(async (req, res) => {
  try {
    const {
      session: { questions, numTry },
    } = req.body
    console.log(numTry)
    //numTry += 1
    const newCalculation = new Calculation({
      session: {
        questions,
        numTry: numTry + 1,
      },
    })
    const createdCalculation = await newCalculation.save()
    res.status(201).json(createdCalculation)
    console.log(createdCalculation)
  } catch (error) {
    console.error(error)
  }
})

export { postCalculation }
