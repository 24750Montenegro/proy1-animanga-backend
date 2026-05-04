const { Router } = require('express');
const controller = require('../controllers/ratingsController');

const router = Router();

router.get('/series/:seriesId', controller.getBySeries);
router.post('/series/:seriesId', controller.create);

module.exports = router;
