const { Router } = require('express');
const controller = require('../controllers/seriesController');
const upload = require('../middleware/upload');

const router = Router();

router.get('/', controller.getAll);
router.get('/exportcsv', controller.exportCSV);
router.get('/:id', controller.getById);
router.post('/', upload.single('image'), controller.create);
router.put('/:id', upload.single('image'), controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
