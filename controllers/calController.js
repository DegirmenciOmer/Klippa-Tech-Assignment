import asyncHandler from 'express-async-handler'
// import Calculation from '../models/calculationModel.js'
// import Question from '../models/questionModel.js'

const postCalculation = asyncHandler(async (req, res) => {
  console.log('postCalculation')
  try {
    res.header('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Origin', '*')
    console.log('postCalculation')
    // const {
    //   session: { questions, numTry },
    // } = req.body
    // console.log(numTry)
    // //numTry += 1
    // const newCalculation = new Calculation({
    //   session: {
    //     questions,
    //     numTry: numTry + 1,
    //   },
    // })
    // const createdCalculation = await newCalculation.save()
    // res.status(201).json(createdCalculation)
    // console.log(createdCalculation)
    // const [
    //   {
    //     newReply: { answer, id, question },
    //   },
    // ] = req.body
    console.log(req.body)
  } catch (error) {
    console.error(error)
  }
})

export { postCalculation }
