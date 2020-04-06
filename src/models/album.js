const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
    name: String,
    author: { type: mongoose.Schema.Types.ObjectId,ref:'Artist'},
    artists: [{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    tracks: [{type: mongoose.Schema.Types.ObjectId,ref:'Track'}],
    description: String,
    image: String,
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    genres: [{type: mongoose.Schema.Types.ObjectId,ref:'Category'}]

});

const Album= mongoose.model('Album', albumSchema);
module.exports = Album;
