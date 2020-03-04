const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongDB database connection established successfully!");
})

const flightsRouter = require('./routes/flights');
const usersRouter = require('./routes/users');
const transitsRouter = require('./routes/transits');
const accommodationRouter = require('./routes/accommodations');
const hotelRouter = require('./routes/hotels');
const transitOptionRouter = require('./routes/transitOptions');

app.use('/flights', flightsRouter);
app.use('/users', usersRouter);
app.use('/transits', transitsRouter);
app.use('/accommodations', accommodationRouter);
app.use('/hotels', hotelRouter);
app.use('/transitOptions', transitOptionRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})