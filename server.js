const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Set config
dotenv.config({ path: './config.env' });

const app = require('./app');

// Plug in telegram bot
require('./telegram');

// Connect DB
// const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
// mongoose
//     .connect(DB, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('DB CONNECTION SUCCESSFUL'));

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port));