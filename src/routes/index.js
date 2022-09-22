const express = require("express");
const clientRoutes = require("./clientRoutes");

const router = express.Router();

router.use("/client");

module.exports = router;
