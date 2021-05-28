import asyncHandler from 'express-async-handler'
import Question from '../models/questionModel.js'
import Calculation from '../models/calculationModel.js'

const getQuestions = asyncHandler(async (req, res) => {
  try {
    const questions = await Question.find({})
    const refinedQs = questions
      .sort(() => Math.random() - Math.random())
      .slice(0, 5)
      .map((q) => ({
        question: q.question,
        id: q._id,
      }))

    const newCalculation = await new Calculation({
      questions: refinedQs,
    }).save()
    return await res.json(newCalculation)
  } catch (error) {
    console.error(error)
  }
})

export { getQuestions }
