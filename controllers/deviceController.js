const Device = require('../models/deviceModel');
const ApiFeatures = require('../utils/ApiFeatures');

exports.getAllDevices = async (req, res) => {
    try {
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
    } catch (er) {
        console.log(er);
    }
};

exports.getDevices = async (req, res) => {
    try {
        const query = Device.find({ device: req.params.name });
        const devices = await query;
        
        res.status(200).json({
            status: 'success',
            data: devices
        });
    } catch (er) {
        console.error(er);
    }
};

exports.addDevice = async (req, res) => {
    try {
        const device = await Device.create(req.body);

        res.status(201).json({
            status: 'success',
            data: device
        });
    } catch (er) {
        console.error(er);
    }
};

exports.deleteDevice = async (req, res) => {
    try {
        await Device.deleteOne({ device: req.params.name });

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (er) {
        console.error(er);
    }
};

exports.updateDevice = async (req, res) => {
    try {
        const device = await Device.findOneAndUpdate(
            { device: req.params.name }, 
            req.body, 
            { new: true, runValidators: true }
        );

        res.status(202).json({
            status: 'success',
            data: device
        });
    } catch (er) {
        console.error(er);
    }
};