const { Router } = require("express");
const controller = require("../controllers/CreateProjectsControllers");
const { redirect } = require('../middlewares/redirect');
const authMid = require('../middlewares/auth');

const router = Router();

// router.use(authMid);

router.post("/projects", controller.create);
router.get("/projects", controller.get);
router.get("/projects/:id", redirect, controller.getById);
router.put("/projects/:id", controller.update);
router.delete('/projects/:id', controller.remove);
router.post('/projects/validate', redirect, controller.validate);

module.exports = router;
