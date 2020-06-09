/**  Functions related to user model
 * @module models/users
 */

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const notificationSchema = mongoose.Schema({
  event: String,
  time: mongoose.SchemaTypes.Date,
  senderId: mongoose.Types.ObjectId,
  trackId: mongoose.Types.ObjectId,
  albumId: mongoose.Types.ObjectId,
  read: Boolean
})
userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    // maxlength: 50,
    // minlength: 10
  },
  email: {
    type: String,
    unique: true,
    required: [true, "A user must have an email"],
    validate: [validator.isEmail, "Invalid email address"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },
  dateAdded: {
    type: Date,
    default: Date.now(),
  },
  age: {
    type: Number,
    required: [true, "An age must be specified"],
    // min: [16, 'A ProjectX User must be over 16'],
    // max: [120]
  },
  gender: String,
  image: String,
  premium: Boolean,
  previouslyPremium: Boolean,
  CreatedPlaylists: [
    {
      type: mongoose.Schema.Types.ObjectId,ref:'Playlist'
    }
  ],

  //==============AUTH======================
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  pushSubscription: {
      type: Object
  },
  premium: {
    type: Boolean,
    default: false,
  },
  previouslyPremium: {
    type: Boolean,
    default: false,
  },
  followers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Artist",
    },
  ],
  playlists: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Playlist",
    },
  ],
  tracks: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Track",
    },
  ],
  albums: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Album",
    },
  ],
  artists: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Artist",
    },
  ],
  notifications: [notificationSchema],
  deletedPlaylists: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Playlist",
    },
  ],
  likedPlaylists: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Playlist",
    },
  ],
  isVerified: {
    type: Boolean,
    defaultValue: false,
  },
  ConfirmationToken: {
        type: String,
        required: true
  }
});

// Generate toekn for a specific user:
/**
 * Generates verification token 
 * @name VerificationToken
 * @function
 * @inner
 * @return {strnig} token
 */
userSchema.methods.VerificationToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "secretcode");
  return token;
};
/**
 * Generates token for a specific user , using userid and secretcode
 * @name generateAuthToken
 * @function
 * @inner
 * @return {strnig} token
 */
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "secretcode");

  user.tokens = user.tokens.concat({ token: token });
  await user.save();
  return token;
};

// so we can access function directly through the model:

/**
 * Main function to authenticate user, Could be accessed through model
 * @name findByCredentials
 *@function
 *@inner
 * @param {string} email - user email
 * @param {string} password - user password
 * @return {object} user
 *
 */
userSchema.statics.findByCredentials = async (email, password) => {
  //find them by email first:
  const user = await User.findOne({ email });
  var err = " empty";
  if (!user) {
    err="Incorrect email or password";
    throw err;
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    err="Incorrect email or password";
    throw err;
  }

  if(user.isVerified === false)
  {
    err = "User Not Verified";
    throw err;
  }

  return user;
};

// =========================== (AUTHENTICAION) Hashing Password =========================

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
    //TODO: fix user update.
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
