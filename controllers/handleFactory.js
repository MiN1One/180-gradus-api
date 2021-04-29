const catchAsync = require('../utils/catchAsync');
const ApiFeatures = require('../utils/ApiFeatures');
const AppError = require('../utils/AppError');

exports.getOne = (Model, populateObj) => 
    catchAsync(async (req, res, next) => {
        let query = new ApiFeatures(Model.findById(req.params.id), req.query)
            .project()
            .mongooseQuery;

        if (populateObj) 
            query = query.populate(populateObj);

        const doc = await query;
    
        if (!doc) 
            return next(new AppError('Document with this id is not found', 404));
    
        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    });

exports.getAll = (Model) => 
    catchAsync(async (req, res, next) => {
        const query = new ApiFeatures(Model.find(), req.query)
            .search()
            .project()
            .filter()
            .sort()
            .mongooseQuery;

        const docs = await query;

        res.status(200).json({
            status: 'success',
            results: docs.length,
            data: {
                data: docs
            }
        });
    });

exports.addOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    });

exports.updateOne = (Model) => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(
            req.params.id,
            req.body, 
            { new: true, runValidators: true }
        );

        if (!doc) 
            return next(new AppError('Document with this id is not found', 404));

        res.status(202).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    });

exports.deleteOne = (Model) => 
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) 
            return next(new AppError('Document with this id is not found', 404));

        res.status(204).json({
            status: 'success',
            data: null
        });
    });

exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        });
    });