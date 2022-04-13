const { Router } = require("express");
const controller = require("../controllers/CreateUserController");
const auth = require('../middlewares/auth');

const router = Router();

router.post("/admin", controller.create);
router.get("/admin", auth, controller.list);
router.put('/admin/:id', auth, controller.update);
router.delete('/admin/:id', auth, controller.remove);
router.post('/auth', controller.authenticate);

module.exports = router;
