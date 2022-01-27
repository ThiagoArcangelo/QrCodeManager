const { Router } = require('express');
const controller = require('../controllers/CreateClientController');

const router = Router();

router.post('/client', controller.create);
router.get('/client', controller.get);
router.put('/client/:id', controller.update);
router.delete('/client/:id', controller.remove);

module.exports = router;