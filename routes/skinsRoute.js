const express = require('express');
const controller = require('../controllers/deviceController');

const router = express.Router({ mergeParams: true });

router
    .route('/popular')
    .get(controller.getPopular, controller.getAllDevices);

router
    .route('/')
    .get(controller.getAllDevices)
    .post(controller.addDevice);

router
    .route('/:id')
    .get(controller.getDevice)
    .patch(controller.updateDevice)
    .delete(controller.deleteDevice);

module.exports = router;