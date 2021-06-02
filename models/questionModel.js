import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: {
    type: Number,
    required: true,
  },
})

const Question = mongoose.model('Question', questionSchema)

export default Question
