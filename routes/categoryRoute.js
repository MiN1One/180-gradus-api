const express = require('express');
const controller = require('../controllers/categoryController');
const skinsRoute = require('./skinRoute');
const authController = require('../controllers/authController');

const router = express.Router();

router.use('/:id/devices', skinsRoute);

router
    .route('/')
    .get(controller.getCategories)
    .post(
        authController.protect,
        authController.restrictTo(['admin']),
        controller.addCategory
    );
    
router
    .route('/:id')
    .get(controller.getCategory)
    .patch(
        authController.protect,
        authController.restrictTo(['admin']),
        controller.updateCategory
    )
    .delete(
        authController.protect,
        authController.restrictTo(['admin']), 
        controller.deleteCategory
    );

module.exports = router;