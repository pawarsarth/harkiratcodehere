const path = require("path");
require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    // console.log("MONGO_URI:", process.env.MONGO_DB_URL); // Debug check
    await mongoose.connect('mongodb+srv://pawarsarthak24:7M4Q5Dff96Sbsvg@cluster0.hfgknhp.mongodb.net/restaurant_waste');
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
  }
}

main();
