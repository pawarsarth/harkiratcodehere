// src/models/WasteRequest.js
const mongoose = require("mongoose");

const wasteRequestSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  wasteType: String,
  quantity: Number,
  pickupAddress: String,
  pickupDate: String,
  status: {
    type: String,
    enum: ["pending", "assigned", "completed"],
    default: "pending",
  },
  collector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

module.exports = mongoose.model("WasteRequest", wasteRequestSchema);
