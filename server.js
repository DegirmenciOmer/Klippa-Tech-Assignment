import express from 'express'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './models/userModel.js'
import Question from './models/questionModel.js'
const app = express()

app.use(express.json())

dotenv.config()

connectDB()

const PORT = process.env.PORT || 8000

app.get(
  '/',
  asyncHandler(async (req, res) => {
    const questions = await Question.find({})
    const randomQuestions = questions
      .sort(() => Math.random() - Math.random())
      .slice(0, 5)
    res.json(randomQuestions)
  })
)
app.get(
  '/:id',
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
