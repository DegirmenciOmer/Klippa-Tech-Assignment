import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
const app = express()

app.use(express.json())

dotenv.config()

connectDB()

const PORT = process.env.PORT || 8000
app.get('/', (req, res) => {
  res.send('Hello world')
})
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
