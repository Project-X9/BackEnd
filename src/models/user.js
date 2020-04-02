const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        unique: true,
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
    artists:[String],

//==============AUTH======================
    tokens: [{
        token: {
            type: String,
            required: true
        }
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