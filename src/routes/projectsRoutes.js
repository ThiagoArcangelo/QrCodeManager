const { Router } = require("express");
const controller = require("../controllers/CreateProjectsControllers");
const { validatePassword } = require("../middlewares/validatePasswordId");
// const authMid = require("../middlewares/auth");

const router = Router();

// router.use(authMid);

router.post("/", /* authMid, */ controller.create);
router.get("/", /* authMid, */ controller.get);
router.get("/:id", /* authMid, */ controller.getById);
router.put("/update/:id", /* authMid, */ controller.update);
router.get("/password/:id", validatePassword, controller.getPasswordById);
router.delete("/:id", /* authMid, */ controller.remove);

module.exports = router;
