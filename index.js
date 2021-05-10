import express from 'express'
import asyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './models/userModel.js'
const app = express()

app.use(express.json())

dotenv.config()

connectDB()

const PORT = process.env.PORT || 8000
app.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  })
)
app.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  })
)

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
