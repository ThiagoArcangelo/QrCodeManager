const { Router } = require("express");
const controller = require("../controllers/CreateParamControllers");
const authorize = require('../middlewares/authorize');

const router = Router();

router.post("/project", controller.create);
router.get("/project", controller.get);
router.get("/project/:_id", controller.getById);
router.post("/entrar", controller.permission);
// router.post('/verify', controller.verify);

module.exports = router;