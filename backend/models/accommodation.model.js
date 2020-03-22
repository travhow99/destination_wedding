const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accommodationSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
    location: {
        type: String,
        trim: true,
        required: true,
    },
    excess_beds: { type: Number, },
    checkin_day: {
        type: Date,
        required: true,
    },
    checkout_day: {
        type: Date,
        required: true,
    },
    notes: { type: String, }
}, {
    timestamps: true
});

const Accommodation = mongoose.model('Accommodations', accommodationSchema);

module.exports = Accommodation;