const express = require('express');
const deviceController = require('../controllers/deviceController');

const router = express.Router();

router
    .route('/')
    .get(deviceController.getAllDevices)
    .post(deviceController.addDevice)

router
    .route('/:name')
    .get(deviceController.getDevices)
    .patch(deviceController.updateDevice)
    .delete(deviceController.deleteDevice);



module.exports = router;