import mongoose from 'mongoose'

const calculationSchema = mongoose.Schema({
  session: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    questions: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Question',
    },
    result: {
      type: Boolean,
      required: false,
    },
    numTry: {
      type: Number,
      required: false,
      default: 0,
    },
  },
})

const Calculation = mongoose.model('Calculation', calculationSchema)

export default Calculation
