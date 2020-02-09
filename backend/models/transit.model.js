const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transitSchema = new Schema({
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
    excess_seats: { type: Number, },
    departure_day: {
        type: Date,
        required: true,
    },
    arrival_day: {
        type: Date,
        required: true,
    },
    notes: { type: String, }
}, {
    timestamps: true
});

const Transit = mongoose.model('Transit', transitSchema);

module.exports = Transit;