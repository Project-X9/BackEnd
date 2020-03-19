const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({

    external_url : [String],
    followers : [String],
    genres :{type:[String],default:[]},
    href: String,
    id: String,
    images: [String],
    name: String,
    popularity: Number,
    uri: String

});

const Artist = mongoose.model('Artist',trackSchema);
module.exports = Artist;