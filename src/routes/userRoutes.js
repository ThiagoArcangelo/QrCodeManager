const { Router } = require("express");
const controller = require("../controllers/CreateUserController");

const router = Router();

router.post("/register", controller.create);
router.put('/register', controller.put);
router.get("/register", controller.index);
router.delete("/register/:id", controller.delete);

module.exports = router;
