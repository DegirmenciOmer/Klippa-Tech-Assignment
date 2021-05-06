import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDB connected ${conn.connection.host}`)
  } catch (error) {
    console.error(error.stack)
    process.exit(1)
  }
}

export default connectDB
