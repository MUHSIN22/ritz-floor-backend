const express = require('express');
const frontPart = require('../controllers/frontPart');
const router = express.Router();

router.get('/:page/:section',frontPart.getSectionData);

module.exports = router;