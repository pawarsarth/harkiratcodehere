const mongoose = require("mongoose");

const wasteRequestSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  collector: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  wasteType: { type: String, enum: ["electronic", "plastic", "food"], required: true },
  quantityKg: { type: Number, required: true },
  status: { type: String, enum: ["pending", "assigned", "picked", "completed"], default: "pending" },
  pickupAddress: { type: String, required: true },
}, { timestamps: true });

const WasteRequest = mongoose.model("WasteRequest", wasteRequestSchema);
module.exports = WasteRequest;
