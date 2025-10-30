const express = require("express");
const router = express.Router();
const WasteRequest = require("../models/WasteRequest");
const User = require("../models/User");
const auth = require("../middlewares/auth");
const roleCheck = require("../middlewares/role");

// ✅ Admin assigns collector to a waste request
router.put(
  "/assign-collector",
  auth,
  roleCheck(["admin"]),
  async (req, res) => {
    try {
      const { requestId, collectorId } = req.body;

      // Validate input
      if (!requestId || !collectorId) {
        return res
          .status(400)
          .json({ message: "Both requestId and collectorId are required" });
      }

      // Check if collector exists and has collector role
      const collector = await User.findById(collectorId);
      if (!collector || collector.role !== "collector") {
        return res.status(400).json({ message: "Invalid collector ID" });
      }

      // Find waste request and assign collector
      const wasteRequest = await WasteRequest.findById(requestId);
      if (!wasteRequest) {
        return res.status(404).json({ message: "Waste request not found" });
      }

      wasteRequest.collector = collectorId;
      wasteRequest.status = "assigned";
      await wasteRequest.save();

      res.status(200).json({
        message: "Collector assigned successfully ✅",
        request: wasteRequest,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
);

module.exports = router;
