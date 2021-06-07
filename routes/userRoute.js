const express = require('express');
const controller = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// router.use(authController.protect, authController.restrictTo(['admin']));

router
    .route('/')
    .get(controller.getAll)
    .post(controller.createOne);

router
    .route('/:id')
    .get(controller.getOne)
    .patch(controller.updateOne)
    .delete(controller.deleteOne);

module.exports = router;