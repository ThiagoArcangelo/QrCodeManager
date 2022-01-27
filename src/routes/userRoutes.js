const { Router } = require("express");
const controller = require("../controllers/CreateUserController");

const router = Router();

router.post("/admin", controller.create);
router.get("/admin", controller.index);
router.put('/admin/:id', controller.update);
router.delete('/admin/:id', controller.remove);

// router.post("/login", controller.post);

module.exports = router;
