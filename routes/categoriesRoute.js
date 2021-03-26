const express = require('express');
const controller = require('../controllers/categoryController');

const router = express.Router();

router
    .route('/')
    .get(controller.getCategories)
    .post(controller.addCategory)
    
router
    .route('/:name')
    .get(controller.getACategory)
    .patch(controller.updateCategory)
    .delete(controller.deleteCategory);


module.exports = router;