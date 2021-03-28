module.exports = (err, req, res, next) => {
    statusCode = err.statusCode || 500;
    status = err.status || 'error';
    message = err.message || 'Something went wrong'

    console.log(err);

    res.status(statusCode).json({
        status,
        message
    });
};