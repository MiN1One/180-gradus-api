const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const sanitizer = require('express-mongo-sanitize');

const errorController = require('./controllers/errorController');

const orderRoute = require('./routes/orderRoute');
const skinRoute = require('./routes/skinRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');

// Server app
const app = express();

// --------- GLOBAL MIDDLEWARES ---------

app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(sanitizer());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Enable cors policy bypass
app.use(cors());

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());


app.use(express.static(__dirname + '/public'));

const upload = multer();

app.use(upload.single('image'), (req, res, next) => {
    console.log('language: ' + req.headers.language);
    // console.log(req.headers.cookie);
    console.log(req.file);
    // console.log(req.cookie);
    next();
});

// ---------- ROUTES ----------

app.use('/api/order', orderRoute);
app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/skins', skinRoute);

// ---------- FIX REACT ROUTING ----------

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// ---------- ERROR HANDLING ----------

app.all('*', (req, res, next) => {
    
    // next(new AppError('Page is not found', 404));

    // res.status(404).json({
    //     status: 'fail',
    //     message: 'Page is not found'
    // });
});

app.use(errorController);

console.log(`\nAPP MODE: ${process.env.NODE_ENV}\n`);

module.exports = app;