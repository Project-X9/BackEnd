const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    name: String,
    author: String,
    artists: [String],
    trackIds: [String],
    discription: String,
    image: String,
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    genres: [String]

});

const Album= mongoose.model('Album', albumSchema);
module.exports = Album;
