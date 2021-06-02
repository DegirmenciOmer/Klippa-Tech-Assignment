import mongoose from 'mongoose'

const sessionSchema = mongoose.Schema({
  questions: {
    type: Array,
    required: false,
  },
  numTry: {
    type: Number,
    required: true,
    default: 1,
  },
})

const Session = mongoose.model('Session', sessionSchema)

export default Session
