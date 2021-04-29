const AppError = require('../utils/AppError');

const handleCastError = (er) => {
    const message = `Request failed at cast: ${er.value} for ${er.path}`;
    return new AppError(message, 400);
};

const handleValidationErr = (er) => {
    const fields = Object.values(er.errors).map(el => el.message);
    const message = `Request failed at validation: ${fields.join('; ')}`;
    return new AppError(message, 400);
};

const handleJWTExpiredErr = () => {
    
};

const handleDuplicateDocErr = () => {
    const message = 'Request failed: duplicate document';
    return new AppError(message, 400);
};

const sendErrorForDev = (er, res) => {
    res.status(er.statusCode).json({
        error: er,
        name: er.name,
        message: er.message,
        stack: er.stack
    });
};

const sendErrorForProd = (er, res) => {
    if (er.isOperational) {
        res.status(er.statusCode).json({
            status: er.status,
            message: er.message
        });
    } else {
        console.log(er);
        er.message = er.message || 'Oops, Something went wrong';
        res.status(er.statusCode).json({
            status: er.status,
            message: er.message
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    console.log(err);

    if (process.env.NODE_ENV === 'development') {
        sendErrorForDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
        if (err.name === 'CastError') err = handleCastError(err);
        if (err.code === '11000') err = handleDuplicateDocErr();
        if (err.name === 'ValidationError') err = handleValidationErr(err);

        sendErrorForProd(err, res);
    }
};