const Category = require('../models/categoryModel');
const factory = require('./handleFactory');
// const catchAsync = require('../utils/catchAsync');

exports.getCategories = factory.getAll(Category);
exports.getCategory = factory.getOne(Category, { path: 'devices', select: '-skins'});
exports.addCategory = factory.addOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
exports.updateCategory = factory.updateOne(Category);