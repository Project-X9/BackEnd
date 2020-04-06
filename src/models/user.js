const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        // maxlength: 50,
        // minlength: 10
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'A user must have an email'],
        validate: [validator.isEmail, 'Invalid email address']
    },
    password: {
        type:String,
        required: [true, 'A user must have a password']
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    age: {
        type: Number,
        required: [true, 'An age must be specified'],
        // min: [16, 'A ProjectX User must be over 16'],
        // max: [120]
    },
    gender: String,
    image: String,
    premium: Boolean,
    previouslyPremium: Boolean,
    followers:[String],
    following:[String],
    playlists:[String],
    tracks:[String],
    albums:[String],
    artists:[String],

//==============AUTH======================
    tokens: [{
        token: {
            type: String,
            required: true
        }}],
    premium: {
        type: Boolean,
        default: false
    },
    previouslyPremium: {
        type: Boolean,
        default: false
    },
    followers:[{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    following:[{
        type: mongoose.Types.ObjectId,
        ref: 'User Artist'
    }],
    playlists:[{
        type: mongoose.Types.ObjectId,
        ref: 'Playlist'
    }],
    tracks:[{
        type: mongoose.Types.ObjectId,
        ref: 'Track'
    }],
    albums:[{
        type: mongoose.Types.ObjectId,
        ref: 'Album'
    }],
    artists:[{
        type: mongoose.Types.ObjectId,
        ref: 'Artist'
    }]
});


// Generate toekn for a specific user: 

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'secretcode');

    user.tokens = user.tokens.concat({ token: token});
    await user.save();
    return token;
}



// so we can access function directly through the model:
userSchema.statics.findByCredentials = async (email, password) => {
    
    //find them by email first:
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch){
        throw new Error('Incorrect email or password');
    }

    return user;

} 



// =========================== (AUTHENTICAION) Hashing Password =========================

userSchema.pre('save', async function(next) {
    const user = this;


    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
        //TODO: fix user update.
    }
    
    next();

});

const User = mongoose.model('User',userSchema);








module.exports = User;