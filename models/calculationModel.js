import mongoose from 'mongoose'

const calculationSchema = mongoose.Schema({
  questions: {
    type: Array,
    required: false,
  },
  numTry: {
    type: Number,
    required: true,
    default: 0,
  },
})

const Calculation = mongoose.model('Calculation', calculationSchema)

export default Calculation
