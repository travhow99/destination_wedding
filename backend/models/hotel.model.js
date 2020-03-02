const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    url: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },
    price_range: {
        type: String,
        trim: true,
        required: true,
    },
    distance: {
        type: String,
        trim: true,
        required: true,
    },
    notes: { type: String, }
}, {
    timestamps: true
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;