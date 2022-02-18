const { Router } = require("express");
const controller = require("../controllers/CreateParamControllers");
const authorize = require("../middlewares/authorize");

const router = Router();

router.post("/project", controller.create);
router.get("/project", controller.get);
router.get("/project/:id", controller.getById);
router.put("/project/:id", controller.updatePassword);
router.delete('/project/:id', controller.remove);

module.exports = router;
