const Device = require('../models/deviceModel');
const ApiFeatures = require('../utils/ApiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/ApiFeatures');

exports.getAllDevices = catchAsync(async (req, res, next) => {
    const query = new ApiFeatures(Device.find(), req.query)
        .search()
        .project()
        .filter()
        .sort()
        .mongooseQuery;

    const devices = await query;

    res.status(200).json({
        status: 'success',
        data: {
            devices
        }
    });
});

exports.getDevice = catchAsync(async (req, res, next) => {
    const query = new ApiFeatures(Device.findById(req.params.id), req.query)
        .project()
        .mongooseQuery;

    const device = await query;

    if (!device) 
        return next(new AppError('Device with this id is not found', 404));

    res.status(200).json({
        status: 'success',
        data: device 
    });
});

exports.addDevice = catchAsync(async (req, res, next) => {
    const device = await Device.create(req.body);

    res.status(201).json({
        status: 'success',
        data: device
    });
});

exports.deleteDevice = catchAsync(async (req, res, next) => {
    const device = await Device.findByIdAndDelete(req.params.id);

    if (!device) 
        return next(new AppError('Device with this id is not found', 404));

    res.status(204).json({
        status: 'success',
        data: null
    });
});

exports.updateDevice = catchAsync(async (req, res, next) => {
    const device = await Device.findByIdAndUpdate(
        req.params.id,
        req.body, 
        { new: true, runValidators: true }
    );

    if (!device) 
        return next(new AppError('Device with this id is not found', 404));

    res.status(202).json({
        status: 'success',
        data: device
    });
});