const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', (er) => {
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    console.log(er.name, er.message);
    process.exit(1);
});

// Set config
dotenv.config({ path: './config.env' });

const app = require('./app');

// Plug in telegram bot
require('./telegram');

// Connect DB
const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
// const DB_LOCAL = process.env.DB_LOCAL;
mongoose
    .connect(DB, {
    // .connect(DB_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB CONNECTION SUCCESSFUL'))

// Listen
const port = process.env.PORT || 3003;
const server = app.listen(port, () => console.log('Listening on port ' + port));

process.on('unhandledRejection', (er) => {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(er.name, er.message);
    server.close(() => process.exit(1));
});