const { Router } = require("express");
const controller = require("../controllers/CreateUserController");

const router = Router();

router.post("/admin", controller.create);
router.get("/admin", controller.list);
router.put('/admin/:id', controller.update);
router.delete('/admin/:id', controller.remove);
/* router.post('/admin/login', controller.signIn);
router.get('/admin/logout', controller.signOut);
 */
router.post('/admin/authenticate', controller.authenticate);

// router.post("/login", controller.post);

module.exports = router;
