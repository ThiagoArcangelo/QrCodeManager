const { Router } = require("express");
const controller = require("../controllers/CreateUserController");

const router = Router();

router.post("/register", controller.create);
router.get("/register", controller.index);
// router.post("/login", controller.post);

module.exports = router;
