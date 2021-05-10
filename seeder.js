import mongoose from 'mongoose'
import dotenv from 'dotenv'
import sampleUsers from './data/sampleUsers.js'
import sampleQs from './data/sampleQs.js'
import Calculation from './models/calculationModel.js'
import Question from './models/questionModel.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Question.deleteMany()
    await User.deleteMany()
    await Calculation.deleteMany()
    await User.insertMany(sampleUsers)
    await Question.insertMany(sampleQs)

    console.log(sampleUsers)
    console.log(sampleQs)
    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Question.deleteMany()
    await User.deleteMany()
    await Calculation.deleteMany()

    console.log('Data destroyed')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
