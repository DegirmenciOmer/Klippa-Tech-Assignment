import mongoose from 'mongoose'

const calculationSchema = mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Question',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  result: {
    type: Boolean,
    required: true,
  },
})

const Calculation = mongoose.model('Calculation', calculationSchema)

export default Calculation
