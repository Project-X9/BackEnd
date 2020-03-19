const mongoose= require('mongoose');


const trackSchema = new mongoose.Schema({
    album :{type: mongoose.Schema.Types.ObjectId,ref:'Album'},
    artists :[{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    disc_number : Number,
    duration_ms : Number,
    explicit: Boolean ,
    href : string,
    id : string,
    is_playable : Boolean,
    name : string,
    popularity : Number,
    preview_url : {type:string, default: null},
    uri : string
});

const Track = mongoose.model('Track',trackSchema);
module.exports = Track;