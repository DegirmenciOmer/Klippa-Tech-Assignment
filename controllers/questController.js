import asyncHandler from 'express-async-handler'
import Question from '../models/questionModel.js'
import Session from '../models/sessionModel.js'

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

    const newSession = await new Session({
      questions: refinedQs,
    }).save()
    return await res.json(newSession)
  } catch (error) {
    console.error(error)
  }
})

export { getQuestions }
