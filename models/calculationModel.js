import mongoose from 'mongoose'

const calculationSchema = mongoose.Schema({
  session: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    questions: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Question',
    },
    result: {
      type: Boolean,
      required: true,
    },
  },
})

const Calculation = mongoose.model('Calculation', calculationSchema)

export default Calculation
