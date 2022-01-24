const { Router } = require('express');
const controller = require('../controllers/CreateClientController');

const router = Router();

router.post('/client', controller.post);
router.get('/client', controller.get);

module.exports = router;