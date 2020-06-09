/**  controllers for user related routes
 * @module controller/users
 */
const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;
const sendNotification = require("./../notificationHandler");

exports.getAllUsers = async (req, res) => {
  try {
    let totalCount = await User.countDocuments();
    totalCount = totalCount.valueOf();
    const users = await User.find()
      .populate("playlists")
      .skip(10 * req.query.page - 1)
      .limit(10);
    res.status(200).json({
      status: "success",
      totalCount,
      page: req.query.page,
      count: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate([
      {
        path: "albums",
        populate: {
          path: "author",
        },
      },
      {
        path: "playlists",
      },
      {
        path: "artists",
      },
      {
        path: "tracks",
        populate: {
          path: "artists",
        },
      },
    ]);
    if (user) {
      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Id not found",
      error: err.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "email",
    "password",
    "age",
    "premium",
    "previouslyPremium",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  try {
    if (!isValidOperation) {
      return res.status(400).json({
        status: "fail",
        message: "Bad Request",
      });
    }
    const user = await User.findById(req.params.id);
    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save({
      validateBeforeSave: true,
    });
    return res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getCurrentUser = async (req, res) => {
  console.log(req.user);
  res.send(req.user);
};

exports.getTracks = async (req, res) => {
  try {
    const tracks = await User.findById(req.params.id, "tracks").populate({
      path: "tracks",
      populate: {
        path: "artists",
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        user: tracks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// exports.addTracks = async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err.message
//     });
//   }
// }

exports.deleteTracks = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $pullAll: { tracks: req, params, trackId },
    });

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAlbums = async (req, res) => {
  try {
    const albums = await User.findById(req.params.id, "albums");
    res.status(200).json({
      status: "success",
      data: {
        albums,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// exports.addAlbums = async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err.message
//     });
//   }
// }

exports.deleteAlbums = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $pullAll: { albums: req, params, albumId },
    });

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//============================== (AUTHENTICATION) =========================
/**
 * Controller serving login route.
 * @name login
 * @function
 * @inner
 * @param {object} req -  contains email and password
 * @param {object} res - on success contains status , user object , token string , on failure
 *
 * Wrong user credentials result in status code 400 , status:fail
 */
exports.login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    console.log(user);
    const token = await user.generateAuthToken();
    res.status(200).send({ status: "success", user, token }); // we will just send json with user info untill its implemented to direct user to his homepage.
  } catch (e) {
    res.status(400).send({ status: "fail", error: e });
  }
};


// exports.changePassword = async (req, res) => {
//   try{
//     const user = await User.findByCredentials(req.body.email, req.body.currentPassword);

//   }
// }

exports.getNotifications = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "notifications");
    let notifications = user.notifications;
    const page = req.query.page || 1;
    notifications = notifications.slice(10 * (page - 1), 10 * page);
    res.status(200).json({
      status: "success",
      totalCount: user.notifications.length,
      page: req.query.page,
      count: notifications.length,
      data: {
        notifications,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.deleteNotifications = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { notifications: [] });

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
    });
  }
};

exports.updatePushSubscription = async (req, res) => {
  console.log('updating pushNotification endpoint')
  try {
    await User.findByIdAndUpdate(req.params.id, {
      pushSubscription: req.body.pushSubscription,
    });
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateNotification = async (req, res) => {
  try{
    const userId = req.params.userId;
    const notificationId = req.params.notificationId;
    await User.findOneAndUpdate({ _id: userId, "notifications._id": notificationId}, {
      $set: { "notifications.$.read" : req.body.read}
    })

    const user = await User.findById(userId, 'notifications');
    res.status(200).json({
        status: 'success',
        notification: user.notifications.find(val => {
          return val._id == notificationId
        })
      })

    
  } catch (err) {
    console.log(err.message)
    res.status(404).json({
      status: 'fail'
    })
  }

}




//-------------------------------------------------------------sk----------------------------------------//

 /**
 * @property {Function} confirmation  
 * @param {object} req - request object contains email and password
 * @param {string} req.body.token - token id
 * @param {object} res - on success contains status , url string , on failure Wrong user credentials result in status code 400 , status:fail */

exports.confirmation = async (req, res) => {
  try {
    jwt.verify(req.params.token, "secretcode");
    await User.findByIdAndUpdate(req.body.id, {
      $set: { "isVerified": true }
    });
    const result = "http://localhost:3000/api/v1/users/login";
    res.status(201).json({
      status: "success",
      data: {
        result
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};


/**
 * @property {Function} SignUp  
 * @param {object} req - request object contains email and password
 * @param {string} req.body - contains user info
 * @param {object} res - on success contains status , url string and token, on failure Wrong user credentials result in status code 400 , status:fail */

exports.SignUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = jwt.sign({ _id: newUser._id.toString() }, "secretcode",{
      expiresIn: '1d',
    });
    newUser.ConfirmationToken=token;
    await newUser.generateAuthToken();
    const url = 'http://localhost:3000/api/v1/users/confirmation/'+token;
    res.status(201).json({
      status: "success",
      data: {
        url
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getDeletedPlaylists = async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    console.log(req.body.id)
    const ret = user.deletedPlaylists;
    res.status(200).json({
      status: "success",
      data: {
        ret
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};


exports.recoverPlaylist = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) 
    {
      var count = 0;
      for (var i = 0; i < IN_User.deletedPlaylists.length; i++) {
        if (req.params.id == IN_User.deletedPlaylists[i]) {
          count++;
        }
      }
      if(count!==0)
      {
        await User.findByIdAndUpdate(req.body.id, {
          $pull: { deletedPlaylists: req.params.id },
          $push: { playlists: req.params.id }
        });
        await Playlist.findByIdAndUpdate(req.params.id, {
          $push: { followers: req.body.id },
        });
      }
      res.status(200).json({
        status: "success"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};