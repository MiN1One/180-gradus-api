const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');

const signToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES }
    );
};

const createSendToken = (req, res, user, statusCode) => {
    const token = signToken(user._id);
    
    const cookieOptions = {
        httpOnly: true,
        secure: false
        // secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    };

    // cookieOptions.secure = process.env.NODE_ENV === 'production' ? true : false;

    res.cookie('jwt', token, cookieOptions);

    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        user
    });
};

exports.login = catchAsync(async (req, res, next) => {
    const { password, login } = req.body;

    if (!password || !login) 
        return next(new AppError('Please enter your password and login', 400));

    const user = await User.findOne({ login }).select('+password');

    if (!user || !(await user.correctPassword(password)))
        return next(new AppError('User does not exist or password is wrong', 400));

    createSendToken(req, res, user, 200);
});

exports.signup = catchAsync(async (req, res, next) => {
    const user = await User.create({
        login: req.body.login,
        email: req.body.email,
        name: req.body.name,
        last_name: req.body.last_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        password: req.body.password
    });

    createSendToken(req, res, user, 201);
});

exports.protect = catchAsync(async (req, res, next) => {
    console.log(req.headers);
    let token = null;
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer'))
        token = authorization.split(' ')[1];
    else if (req.cookie) token = req.cookie;

    if (!token) 
        return next(new AppError('You are not logged in, please login', 401));
    
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedToken.id);
    if (!user)
        return next(new AppError('There is no user with this id', 404));
    
    if (user.passwordWasChanged(decodedToken.iat))
        return next(new AppError('Password was recently changed, please login again', 400));

    req.user = user;
    next();
});

exports.restrictTo = (roles) =>
    catchAsync(async (req, res, next) => {
        if (!roles.includes(req.user.role))
            return next(new AppError('You do not have permission to perform this action', 403));

        next();
    });