const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Set config
dotenv.config({ path: './config.env' });

const app = require('./app');

// Plug in telegram bot
require('./telegram');

// Connect DB
const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB CONNECTION SUCCESSFUL'))
    .catch((er) => console.error(er));

// Listen
const port = process.env.PORT || 3010;
app.listen(port, () => console.log('Listening on port ' + port));