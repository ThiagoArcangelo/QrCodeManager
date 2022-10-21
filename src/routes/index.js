const express = require("express");
const clientRoutes = require("./clientRoutes");
const projectsRoutes = require("./projectsRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.use("/client", clientRoutes);
router.use("/projects", projectsRoutes);
router.use("/admin", userRoutes);
router.use("/login", userRoutes);
router.use("/logout", userRoutes);

module.exports = router;
