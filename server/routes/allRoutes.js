const express = require("express");
const authRoutes = require("./AuthRoutes");

const router = express.Router();

router.use("/auth", authRoutes);

module.exports = router;
