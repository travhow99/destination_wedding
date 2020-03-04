const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transitOptionSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
    from: {
        type: String,
        trim: true,
        required: true,
    },
    to: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },
    url: {
        type: String,
        trim: true,
        required: true,
    },
    times: {
        type: String,
        trim: true,
        required: true,
    },
    price_range: {
        type: String,
        trim: true,
        required: true,
    },
    notes: { type: String, }
}, {
    timestamps: true
});

const TransitOption = mongoose.model('TransitOption', transitOptionSchema);

module.exports = TransitOption;