import dotenv from 'dotenv'
import sampleQs from './data/sampleQs.js'
import Session from './models/sessionModel.js'
import Question from './models/questionModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Question.deleteMany()
    await Session.deleteMany()
    await Question.insertMany(sampleQs)

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
    await Session.deleteMany()

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
