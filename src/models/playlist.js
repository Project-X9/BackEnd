const mongoose = require('mongoose');

const playlistSchema = mongoose.Schema({
    name: String,
    author: String,
    artists: [String],
    trackIds: [{type: mongoose.Schema.Types.ObjectId,ref:'Track'}],
    description: String,
    image: String,
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    followers: [String],
    Is_private: Boolean

});

const Playlist= mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
