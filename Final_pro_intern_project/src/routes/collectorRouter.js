const express = require("express");
const { getAssignedPickups, updatePickupStatus } = require("../controllers/collectorController");
const auth = require("../middlewares/auth");
const roleCheck = require("../middlewares/role");
const router = express.Router();

router.get("/assigned", auth, roleCheck(["collector"]), getAssignedPickups);
router.put("/status", auth, roleCheck(["collector"]), updatePickupStatus);

module.exports = router;
