const { Router } = require("express");
const controller = require("../controllers/CreateProjectsControllers");
const {validate} = require('../middlewares/redirect');
const authMid = require('../middlewares/auth');

const router = Router();

// router.use(authMid);

router.post("/projects", controller.create);
router.get("/projects", controller.get);
router.get("/projects/:id",  controller.getById);
router.put("/projects/:id", controller.update);
router.delete('/projects/:id', controller.remove);
// router.post('/projects/validate', validate, controller.validate);

module.exports = router;