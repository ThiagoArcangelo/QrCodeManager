const { Router } = require("express");
const controller = require("../controllers/CreateUserController");

const router = Router();

router.post("/register", controller.create);
router.put('/register/:id', controller.put);
router.get("/register", controller.index);
router.delete("/register/:id", controller.remove);

module.exports = router;
