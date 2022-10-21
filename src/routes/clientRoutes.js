const { Router } = require("express");
const controller = require("../controllers/CreateClientController");

const router = Router();

router.post("/", controller.create);
router.get("/", controller.get);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
