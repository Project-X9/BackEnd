const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    Bio : String,
    followers : [String],
    genres :[{type: mongoose.Schema.Types.ObjectId,ref:'Category'}],
    tracks: [{type: mongoose.Schema.Types.ObjectId,ref:'Track'}],
    id: String,
    image: String,
    name: String,
    relatedArtists: [{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    email:String,
    password: String,
    dateAdded:Date


});

const Artist = mongoose.model('Artist',trackSchema);
module.exports = Artist;