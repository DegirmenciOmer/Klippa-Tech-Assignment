import express from 'express'
import {
  getQuestions,
  getQuestionById,
} from '../controllers/questController.js'

const router = express.Router()

router.route('/'.get(getQuestions))
router.route('/:id'.get(getQuestionById))

export default router
