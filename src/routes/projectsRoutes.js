const { Router } = require("express");
const controller = require("../controllers/CreateProjectsControllers");
const {validate} = require('../middlewares/redirect');
const authMid = require('../middlewares/auth');

const router = Router();

// router.use(authMid);

router.post("/projects", authMid, controller.create);
router.get("/projects",authMid, controller.get);
router.get("/projects/:id", validate, controller.getById);
router.put("/projects/:id",authMid, controller.update);
router.delete('/projects/:id', authMid, controller.remove);
// router.post('/projects/validate', validate, controller.validateKey);

module.exports = router;
