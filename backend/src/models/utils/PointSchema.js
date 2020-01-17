const moogoose = require('mongoose');

const PointSchema = new moogoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

module.exports = PointSchema;