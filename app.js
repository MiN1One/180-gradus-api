const express = require('express');
const cors = require('cors');

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
    console.log(req.headers.language);
    next();
});

// ---------- ROUTES ----------

app.use('/api/v1/order', orderRoute);
app.use('/api/v1/categories', categoriesRoute);
app.use('/api/v1/skins', skinsRoute);

module.exports = app;