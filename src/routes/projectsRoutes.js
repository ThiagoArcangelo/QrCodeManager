const { Router } = require("express");
const controller = require("../controllers/CreateProjectsControllers");
const { validate } = require("../middlewares/redirect");
// const authMid = require("../middlewares/auth");

const router = Router();

// router.use(authMid);

router.post("/", controller.create);
router.get("/", controller.get);
router.get("/:id", validate, controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
