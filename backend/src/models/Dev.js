const moogoose = require('mongoose');
const PointSchema = require('./utils/PointSchema'); 

const DevSchema = new moogoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = moogoose.model('Dev', DevSchema);