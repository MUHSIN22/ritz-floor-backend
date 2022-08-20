const express = require('express');
const upload = require('../middlewares/imageUpload');
const router = express.Router();
const knowledgeSeriesController = require('../controllers/knowledgeSeries');
const adminAuthenticator = require('../middlewares/adminAuthenticator');

router.put('/',adminAuthenticator, upload.array('images',20),knowledgeSeriesController.updateKnowledgeSeries);
router.get('/' ,knowledgeSeriesController.getKnowledgeSeries)
router.delete('/image/:id',adminAuthenticator,knowledgeSeriesController.deleteKnowledgeSeriesImage);

module.exports = router;