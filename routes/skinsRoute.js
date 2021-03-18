const express = require('express');
const controller = require('../controllers/skinsController');

const router = express.Router();

router
    .route('/')
    .get(controller.getSkins);

router
    .route('/:category')
    .get(controller.getSkins)

module.exports = router;