const express = require('express');
const cors = require('cors');
const AppError = require('./utils/AppError');

const errorController = require('./controllers/errorController');

const orderRoute = require('./routes/orderRoute');
const skinsRoute = require('./routes/skinsRoute');
const categoriesRoute = require('./routes/categoriesRoute');

// Server app
const app = express();

// --------- GLOBAL MIDDLEWARES ---------

// Enable cors policy bypass
app.use(cors());

app.use(express.json({ limit: '10kb' }));

app.use('/assets/images', express.static(__dirname + '/public/images'));

app.use((req, res, next) => {
    console.log('language: ' + req.headers.language);
    next();
});


// ---------- ROUTES ----------

app.use('/api/order', orderRoute);
app.use('/api/categories', categoriesRoute);
app.use('/api/skins', skinsRoute);


// ---------- ERROR HANDLING ----------

app.all('*', (req, res, next) => {
    next(new AppError('Page is not found', 404));

    res.status(404).json({
        status: 'fail',
        message: 'Page is not found'
    });
});

app.use(errorController);

module.exports = app;