import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  numCorrect: {
    type: Number,
    required: true,
    default: 0,
  },
})

const User = mongoose.model('User', userSchema)

export default User
