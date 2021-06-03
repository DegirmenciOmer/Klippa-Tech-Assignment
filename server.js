import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/db.js'
import { getQuestions } from './controllers/questController.js'
import { postSession } from './controllers/sessionController.js'

const app = express()

app.use(express.json())

const __dirname = path.resolve()

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
app.post('/quest/session', postSession)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('*', (req, res) => {
    res.send('API is running...')
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
