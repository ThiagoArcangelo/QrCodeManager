const { Router } = require("express");
const controller = require("../controllers/CreateParamControllers");
const passwordAuth = require('../middlewares/passwordAuth');

const router = Router();

router.post("/project", controller.create);
router.get("/project", passwordAuth,  controller.get);
router.get("/project/:id", controller.getByURL);
// router.put('/project/:id', controller.update);
// router.delete('/home/:id', controller.delete);

module.exports = router;
