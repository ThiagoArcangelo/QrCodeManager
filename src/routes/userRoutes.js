const { Router } = require("express");
const controller = require("../controllers/CreateUserController");
const auth = require('../middlewares/auth');

const router = Router();

router.post("/admin", controller.create);
router.get("/admin",  controller.list);
router.put('/admin/:id',  controller.update);
router.delete('/admin/:id',  controller.remove);
router.post('/login', controller.login);
router.get('/logout', controller.logout);

module.exports = router;
