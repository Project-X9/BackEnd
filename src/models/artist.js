const mongoose = require('mongoose');


const notificationSchema = mongoose.Schema({
    event: String,
    time: mongoose.SchemaTypes.Date,
    senderId: mongoose.Types.ObjectId,
    trackId: mongoose.Types.ObjectId,
    albumId: mongoose.Types.ObjectId,
    read: Boolean
  })

const artistSchema = new mongoose.Schema({
    Bio : String,
    followers : [{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    genres :[{type: mongoose.Schema.Types.ObjectId,ref:'Category'}],
    tracks: [{type: mongoose.Schema.Types.ObjectId,ref:'Track'}],
    image: String,
    name: String,
    relatedArtists: [{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    email:String,
    password: String,
    dateAdded:Date,
    albums: [{type: mongoose.Schema.Types.ObjectId,ref:'Album'}],  
    notifications: [notificationSchema],
    pushSubscription: {
        type: Object
    },

});

const Artist = mongoose.model('Artist',artistSchema);
module.exports = Artist;