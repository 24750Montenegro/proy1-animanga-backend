const { Router } = require('express');
const controller = require('../controllers/commentsController');

const router = Router();

router.get('/series/:seriesId', controller.getBySeriesId);
router.get('/chapter/:chapterId', controller.getByChapterId);
router.post('/series/:seriesId', controller.createForSeries);
router.post('/chapter/:chapterId', controller.createForChapter);

module.exports = router;
