const Device = require('../models/deviceModel');
const factory = require('./handleFactory');
// const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/ApiFeatures');
// const ApiFeatures = require('../utils/ApiFeatures');

exports.setParams = (req) => {
    // if (!req.params.id)
};

exports.getAllDevices = factory.getAll(Device);
exports.getDevice = factory.getOne(Device);
exports.addDevice = factory.addOne(Device);
exports.updateDevice = factory.updateOne(Device);
exports.deleteDevice = factory.deleteOne(Device);


