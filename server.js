import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import { getQuestions, getQuestionById } from './controllers/questController.js'
import { postCalculation } from './controllers/calController.js'
import { registerUser, loginUser } from './controllers/userController.js'

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(express.json())

dotenv.config()

connectDB()

const PORT = process.env.PORT || 8000

app.get('/', getQuestions, cors(corsOptions))
app.get('/quest/:id', getQuestionById, cors(corsOptions))

app.post('/quest/calculation', cors(corsOptions), postCalculation)
app.post('/users/register', cors(corsOptions), registerUser)
app.post('/users/login', cors(corsOptions), loginUser)

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
