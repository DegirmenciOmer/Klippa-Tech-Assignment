import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { getQuestions } from './controllers/questController.js'
import { postCalculation } from './controllers/calController.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  )
  next()
})

dotenv.config()

connectDB()

const PORT = process.env.PORT || 8000

app.get('/', getQuestions)
app.post('/quest/calculation', postCalculation)

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
