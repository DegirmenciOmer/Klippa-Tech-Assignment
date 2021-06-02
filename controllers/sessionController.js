import asyncHandler from 'express-async-handler'
import Session from '../models/sessionModel.js'
import { responseHandler } from '../services/QuestionGameService.js'

/**
 * TODO:
 * compare each question
 * if at least one incorrect, numTry++, try again
 * if numTry === 3 GAMEOVER
 * if correct, SUCCESS
 * restart for a new game
 */
const postSession = asyncHandler(async (req, res) => {
  try {
    const sessionDB = await Session.findById(req.body.replyId)

    const response = await responseHandler(req.body.questions, sessionDB)
    res.json(response)
  } catch (error) {
    console.error(error)
  }
})

export { postSession }
