const { Router } = require("express");
const controller = require("../controllers/CreateParamControllers");

const router = Router();

router.post("/home", controller.post);
router.get("/home", controller.get);
// router.put('/home/:id', controller.put);
// router.delete('/home/:id', controller.delete);

module.exports = router;
