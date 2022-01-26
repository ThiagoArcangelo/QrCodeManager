const { Router } = require("express");
const controller = require("../controllers/CreateUserController");

const router = Router();

router.post("/admin", controller.create);
router.get("/admin", controller.index);
// router.post("/login", controller.post);

module.exports = router;
