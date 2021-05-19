import asyncHandler from 'express-async-handler'
import Calculation from '../models/calculationModel.js'
import Question from '../models/questionModel.js'
import User from '../models/userModel.js'

// Register a new user: POST /users/register
const registerUser = asyncHandler(async (req, res) => {
  const { userName } = req.body

  const userExist = await User.findOne({ userName })

  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    userName,
  })

  if (user) {
    res.status(201).json({
      userName: user.userName,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//  POST /users/login
const loginUser = asyncHandler(async (req, res) => {
  const { userName } = req.body

  const user = await User.findOne({ userName })

  if (user) {
    res.json({
      _id: user._id,
      userName: user.userName,
      numCorrect: user.numCorrect,
    })
  } else {
    res.status(401)
    throw new Error('Invalid username')
  }
})

export { registerUser, loginUser }
