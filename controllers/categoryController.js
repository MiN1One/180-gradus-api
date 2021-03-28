const CategoryModel = require('../models/categoryModel');
const catchAsync = require('../utils/catchAsync');

exports.getCategories = catchAsync(async (req, res, next) => {
    const allCategories = await CategoryModel.find();

    res.status(200).json({
        status: 'success',
        data: {
            allCategories, 
        }
    });
});

exports.getACategory = catchAsync(async (req, res, next) => {
    const categories = await CategoryModel.find({ type: req.params.type });

    res.status(200).json({
        status: 'success',
        data: {
            categories, 
        }
    });
});

exports.addCategory = catchAsync(async (req, res, next) => {
    const category = new CategoryModel(req.body);
    await category.save();

    res.status(201).json({
        status: 'success',
        data: category
    });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
    await CategoryModel.deleteOne({ name: req.body.name });

    res.status(204).json({
        status: 'success',
        data: null
    });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
    const category = await CategoryModel.findOneAndUpdate(
        { name: req.params.name }, 
        req.body,
        { new: true, runValidators: true }
    );

    res.status(201).json({
        status: 'success',
        data: category
    });
});
