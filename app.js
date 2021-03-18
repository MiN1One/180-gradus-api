const express = require('express');
const cors = require('cors');

const orderRoute = require('./routes/orderRoute');
const skinsRoute = require('./routes/skinsRoute');

// Server app
const app = express();

// --------- GLOBAL MIDDLEWARES ---------

// Enable cors policy bypass
app.use(cors());

app.use(express.json({ limit: '10kb' }));

// ---------- ROUTES ----------

app.use('/api/v1/order', orderRoute);
app.use('/api/v1/skins', skinsRoute);

module.exports = app;