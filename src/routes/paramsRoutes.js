const { Router } = require("express");
const controller = require("../controllers/CreateParamControllers");
const authorize = require('../middlewares/authorize');

const router = Router();

router.post("/projects", controller.create);
router.get("/projects", controller.get);
router.get("/projects/:id", controller.getById);
router.put("/projects/:id", controller.update);
router.delete('/projects/:id', controller.remove);

module.exports = router;
