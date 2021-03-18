const express = require('express');
const controller = require('../controllers/orderController');

const router = express.Router();

router
    .route('/')
    .post(controller.acceptOrder);

module.exports = router;