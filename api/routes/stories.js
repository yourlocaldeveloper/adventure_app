const express = require('express');
const router = express.Router();
const storyController = require('../controllers/story')

router.get('/:id', storyController.fetch);

module.exports = router;