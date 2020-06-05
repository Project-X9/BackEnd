const mongoose = require('mongoose');

const playlistSchema = mongoose.Schema({
    name: String,
    author: {type: mongoose.Schema.Types.ObjectId,ref:'Artist'},
    artists: [{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    tracks: [{type: mongoose.Schema.Types.ObjectId,ref:'Track'}],
    description: String,
    image: String,
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    followers: [{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    likers: [{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    Is_private: Boolean

});

const Playlist= mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
