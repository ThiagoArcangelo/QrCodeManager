const { Router } = require("express");
const controller = require("../controllers/CreateParamControllers");
const authorize = require('../middlewares/authorize');

const router = Router();

router.post("/project", controller.create);
router.get("/project", controller.get);
router.get("/project/:_id",  authorize, controller.getById);
router.put("/project/:_id",  controller.updatePassword);
router.post("/entrar", controller.authenticate);
// router.post('/verify', controller.verify);

module.exports = router;