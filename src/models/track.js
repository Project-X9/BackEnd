const mongoose= require('mongoose');


const trackSchema = new mongoose.Schema({
    artists :[{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    description : String,
    likers : [String],
    id : string,
    name : string,
    playCount : Number,
    url : string,
    duration : Number,
    genres: [{type: mongoose.Schema.Types.ObjectId,ref:'Category'}]
});

const Track = mongoose.model('Track',trackSchema);
module.exports = Track;