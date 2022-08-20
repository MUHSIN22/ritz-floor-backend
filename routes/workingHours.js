const express = require('express')
const router = express.Router();
const workingTimeController = require('../controllers/workingHours')

router.get('/',workingTimeController.getWorkingTimes);
router.put('/:id',workingTimeController.updateWorkingTime);

module.exports = router;