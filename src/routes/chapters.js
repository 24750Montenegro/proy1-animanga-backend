const { Router } = require('express');
const controller = require('../controllers/chaptersController');

const router = Router();

router.get('/series/:seriesId', controller.getBySeries);
router.get('/:id', controller.getById);
router.post('/series/:seriesId', controller.create);

module.exports = router;
