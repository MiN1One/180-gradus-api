const express = require('express');
const controller = require('../controllers/categoryController');
const skinsRoute = require('./skinsRoute');

const router = express.Router();

router.use('/:id/devices', skinsRoute);

router
    .route('/')
    .get(controller.getCategories)
    .post(controller.addCategory);
    
router
    .route('/:id')
    .get(controller.getCategory)
    .patch(controller.updateCategory)
    .delete(controller.deleteCategory);

module.exports = router;