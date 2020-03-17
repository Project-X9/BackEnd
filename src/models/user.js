const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email']
    },
    password: {
        type:String,
        required: [true, 'A user must have a password']
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    age: Number,
    gender: String,
    image: String,
    premium: Boolean,
    previouslyPremium: Boolean,
    followers:[String],
    following:[String],
    playlists:[String],
    tracks:[String],
    albums:[String],
    artists:[String]
});

const User = mongoose.model('User',userSchema);

module.exports = User;