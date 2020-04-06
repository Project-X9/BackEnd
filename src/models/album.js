const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    name: String,
    author: { type: mongoose.Schema.Types.ObjectId,ref:'Artist'},
    artists: [String],
    trackIds: [String],
    description: String,
    image: String,
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    genres: [String]

});

const Album= mongoose.model('Album', albumSchema);
module.exports = Album;
