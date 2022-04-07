const { Router } = require("express");
const controller = require("../controllers/CreateUserController");
const auth = require('../middlewares/auth');

const router = Router();

router.post("/admin", controller.create);
router.get("/admin", auth, controller.list);
router.put('/admin/:id', auth, controller.update);
router.delete('/admin/:id', auth, controller.remove);
/* router.post('/admin/login', controller.signIn);
router.get('/admin/logout', controller.signOut);
 */
router.post('/admin/authenticate', controller.authenticate);

module.exports = router;
