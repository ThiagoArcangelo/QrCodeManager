const { Router } = require("express");
const controller = require("../controllers/CreateParamControllers");
const authorize = require("../middlewares/authorize");

const router = Router();

router.post("/project", controller.create);
router.get("/project", controller.get);
router.get("/project/:_id", controller.getById);
router.put("/project/:_id", controller.updatePassword);
router.post("/login", controller.login);

module.exports = router;
