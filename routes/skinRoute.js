const express = require('express');
const controller = require('../controllers/deviceController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
    .route('/popular')
    .get(controller.getPopular, controller.getAllDevices);

router
    .route('/')
    .get(controller.getAllDevices)
    .post(
        authController.protect,
        authController.restrictTo(['admin']), 
        controller.createTranslations, 
        controller.addDevice
    );

router
    .route('/:id')
    .get(controller.getDevice)
    .patch(
        authController.protect,
        authController.restrictTo(['admin']), 
        controller.updateDevice
    )
    .delete(
        authController.protect,
        authController.restrictTo(['admin']), 
        controller.deleteDevice
    );

module.exports = router;