const express = require("express");
const roomRoutes = require("./room-routes");

const router = express.Router({ mergeParams: true });

router.use("/rooms", roomRoutes);

module.exports = router;
