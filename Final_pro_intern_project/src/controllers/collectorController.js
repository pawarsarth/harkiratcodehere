const WasteRequest = require("../models/wasteRequestModel");

exports.getAssignedPickups = async (req, res) => {
  const requests = await WasteRequest.find({ collector: req.user._id });
  res.json(requests);
};

exports.updatePickupStatus = async (req, res) => {
  const { requestId, status } = req.body;
  const request = await WasteRequest.findById(requestId);
  if (!request) return res.status(404).json({ message: "Request not found" });

  request.status = status;
  await request.save();

  res.json({ message: "Pickup status updated", request });
};
