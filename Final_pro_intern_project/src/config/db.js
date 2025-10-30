const mongoose = require('mongoose');
require('dotenv').config()

async function connectDB() {
  try {
    //  console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
