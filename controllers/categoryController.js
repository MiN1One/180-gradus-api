const CategoryModel = require('../models/categoryModel');

exports.getCategories = async (req, res) => {
    try {
        const allCategories = await CategoryModel.find();

        res.status(200).json({
            status: 'success',
            data: {
                allCategories, 
            }
        });
    } catch (er) {
        console.error(er)
    }
};

exports.getACategory = async (req, res) => {
    try {
        const categories = await CategoryModel.find({ type: req.params.type });
    
        res.status(200).json({
            status: 'success',
            data: {
                categories, 
            }
        });
    } catch (er) {
        console.error(er)
    }
};

exports.addCategory = async (req, res) => {
    try {
        const category = new CategoryModel(req.body);
        await category.save();

        res.status(201).json({
            status: 'success',
            data: category
        });
    } catch (er) {
        console.error(er)
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        await CategoryModel.deleteOne({ name: req.body.name });

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (er) {
        console.error(er)
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findOneAndUpdate(
            { name: req.params.name }, 
            req.body,
            { new: true, runValidators: true }
        );

        res.status(201).json({
            status: 'success',
            data: category
        });
    } catch (er) {
        console.error(er)
    }
};
