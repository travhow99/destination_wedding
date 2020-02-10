const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accommodationsSchema = new Schema({
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

const Accommodations = mongoose.model('Accommodations', accommodationsSchema);

module.exports = Accommodations;