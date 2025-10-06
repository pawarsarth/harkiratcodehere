const express = require("express");
const { createPickup } = require("../controllers/restaurantController");
const auth = require("../middlewares/auth");
const roleCheck = require("../middlewares/role");
const router = express.Router();

router.post("/pickup", auth, roleCheck(["restaurant"]), createPickup);

module.exports = router;
