import express from 'express'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './models/userModel.js'
import Question from './models/questionModel.js'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(express.json())

dotenv.config()

connectDB()

const PORT = process.env.PORT || 8000

app.get(
  '/',
  cors(corsOptions),
  asyncHandler(async (req, res) => {
    try {
      const questions = await Question.find({})
      const randomQuestions = questions
        .sort(() => Math.random() - Math.random())
        .slice(0, 5)
      const refinedQs = randomQuestions.map((q) => ({
        question: q.question,
        id: q._id,
      }))
      res.json(refinedQs)
    } catch (error) {
      console.error(error)
    }
  })
)
app.get(
  '/:id',
  cors(corsOptions),
  asyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.id)
    if (question) {
      res.json(question)
    } else {
      res.status(404).json({ message: 'Question not found' })
    }
  })
)

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
