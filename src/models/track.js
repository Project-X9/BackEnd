const mongoose= require('mongoose');


const trackSchema = new mongoose.Schema({
    artists :[{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    description : String,
    likers : [{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    name : String,
    playCount : Number,
    url : String,
    duration : Number,
    genres: [{type: mongoose.Schema.Types.ObjectId,ref:'Category'}],
    imageUrl : String,
    album: {type: mongoose.Schema.Types.ObjectId, ref: 'Album'}
});

const Track = mongoose.model('Track',trackSchema);
module.exports = Track;