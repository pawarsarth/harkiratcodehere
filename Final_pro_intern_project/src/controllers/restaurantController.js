const WasteRequest = require("../models/wasteRequestModel");

exports.createPickup = async (req, res) => {
  try {
    const { wasteType, quantityKg, pickupAddress } = req.body;

    const wasteRequest = await WasteRequest.create({
      restaurant: req.user._id,
      wasteType,
      quantityKg,
      pickupAddress
    });

    res.status(201).json({ message: "Pickup Request Created", wasteRequest });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
