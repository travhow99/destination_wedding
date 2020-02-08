const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    flight_number: {
        type: String,
        trim: true,
        required: true,
    },
    airline: {
        type: String,
        trim: true,
        required: true,
    },
    departure_city: {
        type: String,
        trim: true,
        uppercase: true,
        required: true,
    },
    arrival_city: {
        type: String,
        trim: true,
        uppercase: true,
        required: true,
    },
    date: {type: Date, required: true}
}, {
    timestamps: true
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;