/**  controllers for user related routes
 * @module controller/users
 */
const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const track = require(`./../models/track.js`);
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require("bcryptjs");
const nodeMailer = require('nodemailer');

/**
 * @property {Function} getAllUsers  Retrieves a page from all User documents, containing 10 users, and sends it back in HTTP response
 * @param {object} req - request object
 * @param {string} req.query.page - the requested page number
 */
exports.getAllUsers = async (req, res) => {
  try {
    let totalCount = await User.countDocuments();
    totalCount = totalCount.valueOf();
    const page = req.query.page || 1;
    const users = await User.find()
      .populate("playlists")
      .skip(10 * (page - 1))
      .limit(10);
    res.status(200).json({
      status: "success",
      totalCount,
      page,
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

/**
 * @property {Function} getUser  Retrieves the user object with the given Id and sends it in HTTP response
 * @param {object} req - request object
 * @param {string} req.params.id - userId
 */
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

/**
 * @property {Function} createUser  Creates a new user with the provided values in the request body, and sends it back in HTTP response
 * @param {object} req - request object
 * @param {string} req.body - The request body containing at least the required fields of the user model
 */
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

/**
 * @property {Function} updateUser  Updates the user who has the received Id with the values in the request body.
 * @param {object} req - request object
 * @param {object} req.params.id - Id of the user to be updated
 * @param {string} req.body - The request body containing at least the required fields of the user model
 */
exports.updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "email",
    "password",
    "age",
    "premium",
    "previouslyPremium",
    "country",
    "mobileNumber",
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
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * @property {Function} deleteUser  Deletes the user with the received Id from the DB
 * @param {object} req.params.id - User Id
 */
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

//TODO
exports.getCurrentUser = async (req, res) => {
  console.log(req.user);
  res.send(req.user);
};

/**
 * @property {Function} getTracks  Returns Tracks of a user in HTTP Response
 * @param {object} req - request object
 * @param {object} req.params.id - Id of the user to be updated
 */
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

//TODO
// exports.addTracks = async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err.message
//     });
//   }
// }

/**
 * @property {Function} deleteTracks  Deletes the array of Liked Tracks from a User Document
 * @param {object} req - request object
 * @param {object} req.params.id - Id of the user to be updated
 */
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

/**
 * @property {Function} getAlbums  Sends Albums of a user back in HTTP response
 * @param {object} req - request object
 * @param {object} res - request object
 * @param {object} req.params.id - Id of the user to be updated
 */
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

//TODO
// exports.addAlbums = async (req, res) => {
//   try {

//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err.message
//     });
//   }
// }

/**
 * @property {Function} deleteTracks  Deletes the array of Liked Albums from a User Document and send back HTTP response
 * @param {object} req - request object
 * @param {object} req.params.id - Id of the user to be updated
 */
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
    // console.log("test");
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

// Notifications

/**
 * @property {Function} getNotifications  Sends the array of Notifications from a User Document in HTTP response
 * @param {object} req - request object
 * @param {object} res - response object
 */
exports.getNotifications = async (req, res) => {
  try {
    // const user = await User.findById(req.params.id, "notifications");
    const user = req.user;
    let notifications = user.notifications;
    const page = req.query.page || 1;
    notifications = notifications.slice(10 * (page - 1), 10 * page);
    res.status(200).json({
      status: "success",
      totalCount: user.notifications.length,
      page: req.query.page || 1,
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

/**
 * @property {Function} deleteNotifications  Deletes the array of Notifications from a User Document and sends back HTTP response
 * @param {object} req - request object
 * @param {object} res - response object
 */
exports.deleteNotifications = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { notifications: [] });

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
    });
  }
};

/**
 * @property {Function} updatePushSubscription  updates the "pushSubscription" field of a user with subscription object in the request body, and sends back HTTP response.
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {object} req.body.pushSubscription - New pushSubscription object
 */
exports.updatePushSubscription = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      pushSubscription: req.body.pushSubscription,
    });
    const user = await User.findById(req.user);
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

/**
 * @property {Function} deletePushSubscription  deletes the "pushSubscription" of the authenticated user and send the update user in HTTP response
 * @param {object} req - request object
 * @param {object} res - response object
 */
exports.deletePushSubscription = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, {
      pushSubscription: {}
    });
    const user = await User.findById(req.user._id);
    res.status(204).json({
      status: "success",
      data: {user}
    });
  } catch (err) {
    console.log(err)
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

/**
 * @property {Function} updateNotification  updates the 'read' field in the notification with the given Id and sends the updated notification object in HTTP response
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {object} req.params.notificationId - Id of the notification to be updated
 */
exports.updateNotification = async (req, res) => {
  try {
    const userId = req.user._id;
    const notificationId = req.params.notificationId;
    await User.findOneAndUpdate(
      { _id: userId, "notifications._id": notificationId },
      {
        $set: { "notifications.$.read": req.body.read },
      }
    );

    const user = await User.findById(userId, "notifications");
    res.status(200).json({
      status: "success",
      notification: user.notifications.find((val) => {
        return val._id == notificationId;
      }),
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
    });
  }
};

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
      $set: { isVerified: true },
    });
    res.status(200).json({
      status: "success"
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
    const ConfirmationToken = jwt.sign(
      { email: req.body.email },
      "secretcode",
      {
        expiresIn: "1d",
      }
    );
    req.body.ConfirmationToken = ConfirmationToken;
    const newUser = await User.create(req.body);
    const userEmail = newUser.email;
    const trans = nodeMailer.createTransport({
      service: "gmail",
      secure: false,
      port: 25,
      auth: {
        user: "projectxdevteam32@gmail.com",
        pass: "projectxteam1!",
      },
      tls: { rejectUnauthorized: false },
    });

    const helperOptions = {
      from: '"projectx" = projectxdevteam32@gmail.com',
      to: userEmail,
      subject: "email confirmation",
      text:
        "To verify your emial please click on this link with this confirmation token . \n\n \n " +
        ConfirmationToken +
        "\n\n \n  \n  Projectx team",
    };

    trans.sendMail(helperOptions, (err, info) => {
      if (err) {
        res.send({ error: "mailing service is currently down", errorM: err });
      }
    });

    const authToken = await newUser.generateAuthToken();
    const id = newUser._id;

    res.status(201).json({
      status: "success",
      data: {
        id,
        user: newUser,
        token: authToken,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * @property {Function} getDeletedPlaylists  get list of Deleted Playlists of current user
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {object} res - response object
 * @param {string[]}res.body.data.playlist_array - array of playlists deleted
 */
exports.getDeletedPlaylists = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if(user !== null)
    {
      const ret = user.deletedPlaylists;
      const playlist_array=[];
      for(var i=0;i<ret.length;i++)
      {
        const playlist = await Playlist.findById(ret[i]);
        playlist_array[i]=playlist;
      }
      res.status(200).json({
        status: "success",
        data: {
          playlist_array
        },
      });
    }else{
      var err="invalid id";
      throw err;
    }
  } catch (err) {
    //console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * @property {Function} recoverPlaylist  recover a certain playlist from deleted/unfollowed playlist of current user
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {object} res - response object
 * @param {string[]}res.status
 */

exports.recoverPlaylist = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      for (var i = 0; i < IN_User.deletedPlaylists.length; i++) {
        if (req.params.id == IN_User.deletedPlaylists[i]) {
          count++;
        }
      }
      if (count !== 0) {
        await User.findByIdAndUpdate(req.body.id, {
          $pull: { deletedPlaylists: req.params.id },
          $push: { playlists: req.params.id },
        });
        await Playlist.findByIdAndUpdate(req.params.id, {
          $push: { followers: req.body.id },
        });
      }else
      {
        return res.status(403).json({ data: "invalid action" });
      }
      res.status(200).json({
        status: "success",
      });
    }else{
      var err = "invalid id";
      throw err;
    }
  } catch (err) {
    //console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * @property {Function} getQueue  retrieve tracks queue
 * @param {object} req - request object
 * @param {string} req.params.id - user id
 * @param {object} res - response object
 * @param {string[]}res.body.queue_tracks  - queue array returned
 */
exports.getQueue = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "queue");
    
      if(user!== null)
      {
          const queue_tracks=[];
          for(var i=0;i<user.queue.length;i++)
          {
            queue_tracks[i]= await track.findById(user.queue[i]);
          }
          res.status(200).json({
            status: "success",
            queue_tracks
          });
      }else{
        var err="invalid id";
        throw err;
      }
  } catch (err)
  {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * @property {Function} isTrackExists  check if track exists
 * @param {object} req - request object
 * @param {string} req.params.id - user id
 * @param {object} res - response object
 * @param {string[]}res.body.queue_tracks  - queue array returned
 */
exports.isTrackExists = async (req, res) => {
  try {
    const user = await User.findById(req.body.id, "tracks");
    if (user !== null) {
      const newtrack = await track.findById(req.params.id);
      if(newtrack !==null)
      {
        var data=false;
        for(var i=0;i<user.tracks.length;i++)
        {
          if(user.tracks[i] == req.params.id )
          {
            data = true;
          }
        }
        res.status(200).json({
          status: "success",
          data,
        });
      } else {
        var err = "invalid track id";
        throw err;
      }
    } else {
      var err = "invalid user id";
      throw err;
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.forgetPassword = async (req, res) => {
  /**
   *    This finds the user that will be sent the recovery email and checks if he even exists
   *
   */
  const user = await User.findById(req.body.id);
  if (!user) {
    res.status(404).send({ error: "User doesnt exist" });
  } else {
    /**
     *    genetartes a random password
     *
     */
    const userEmail = user.email;
    const newPass = Math.floor(
      Math.random() * 10000 * Math.random() * 10000 * (Math.random() * 10000)
    );
    const newPassString = newPass.toString();

    /**
     *   setting up nodemailer with the memestock email
     *
     */
    const trans = nodeMailer.createTransport({
      service: "gmail",
      secure: false,
      port: 25,
      auth: {
        user: "projectxdevteam32@gmail.com",
        pass: "projectxteam1!",
      },
      tls: { rejectUnauthorized: false },
    });

    const helperOptions = {
      from: '"projectx" = projectxdevteam32@gmail.com',
      to: userEmail,
      subject: "Recover Password",
      text:
        "Your new password is:  " +
        newPass +
        "\n You are advised to change it when you can.\n \n  \n  Projectx team",
    };

    trans.sendMail(helperOptions, (err, info) => {
      if (err) {
        res.send({ error: "mailing service is currently down", errorM: err });
      } else {

      /**
       *    This sets password to the new random passwrod that was sent in the email
       *
       */
        
        bcrypt
          .hash(newPassString, 8)
          .then(function (hash) {
            

            User.findByIdAndUpdate(req.body.id, { password: hash })
              .then(function (RetUser) {
                

                res
                  .status(200)
                  .send({ message: "Please check your registered email" });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch();
      }
    });
  }
};
