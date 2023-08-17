const mongoose = require('mongoose')


const connectDB = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const conn = await mongoose.connect(process.env.MONGO_URI);


    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB