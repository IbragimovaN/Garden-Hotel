const express = require("express");
const roomRoutes = require("./room-routes");
const authRoutes = require("./auth-routes");
const userRoutes = require("./user-routes");

const router = express.Router({ mergeParams: true });

router.use("/rooms", roomRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

module.exports = router;
