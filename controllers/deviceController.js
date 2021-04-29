const multer = require('multer');
const fs = require('fs');

const Device = require('../models/deviceModel');
const factory = require('./handleFactory');
const catchAsync = require('../utils/catchAsync');

const upload = multer({ dest: 'public/images/' })

exports.getPopular = (req, res, next) => {
    req.query = {
        ...req.query,
        sort: '-numberOfPurchases',
        limit: 7,
        project: '-skins,-default',
        numberOfPurchases: { $gt: 0 }
    };

    next();
};

exports.createTranslations = catchAsync(async (req, res, next) => {
    if (req.body.translations) {
        req.body.translations.forEach((lang, index) => {
            const translations = {};
            req.body.skins.forEach(el => translations[el.name] = el.translation[index]);

            fs.writeFile(
                `${__dirname}/../public/locales/${lang}/${req.body.device}.json`,
                JSON.stringify(translations),
                null,
                () => next()
            );
        });
    }

    next();
});

exports.getAllDevices = factory.getAll(Device);
exports.getDevice = factory.getOne(Device);
exports.addDevice = factory.addOne(Device);
exports.updateDevice = factory.updateOne(Device);
exports.deleteDevice = factory.deleteOne(Device);


