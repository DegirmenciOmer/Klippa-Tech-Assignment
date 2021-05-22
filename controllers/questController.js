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

    const newCalculation = new Calculation({
      questions: refinedQs,
    })
    const createdCalculation = await newCalculation.save()
    console.log(createdCalculation)
    res.json(createdCalculation)
  } catch (error) {
    console.error(error)
  }
})

const getQuestionById = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id)
  if (question) {
    res.json(question)
  } else {
    res.status(404).json({ message: 'Question not found' })
  }
})

export { getQuestionById, getQuestions }
