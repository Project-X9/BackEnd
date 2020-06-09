/**  controllers for user related routes
 * @module controller/users
 */
const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const track = require(`./../models/track.js`);
const jwt = require("jsonwebtoken");
const ObjectId = require("mongodb").ObjectId;
const sendNotification = require("./../notificationHandler");
const nodeMailer = require('nodemailer');

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
    //console.log(user);
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
    //const result = "http://localhost:3000/api/v1/users/login";
    res.status(201).json({
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
    const newUser = await User.create(req.body);
    const token = jwt.sign({ _id: newUser._id.toString() }, "secretcode",{
      expiresIn: '1d',
    });

    const akrab =jwt.sign({ _id: "5e8643edd411aa54c0357fbd" }, "secretcode",{
      expiresIn: '1d',
    });
    newUser.ConfirmationToken=token;
    await newUser.generateAuthToken();
    const id= newUser._id
    //const url = 'http://localhost:3000/api/v1/users/confirmation/'+token;
    res.status(201).json({
      status: "success",
      data: {
        id,
        token
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


exports.getQueue = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "queue");
    const queue_tracks=[];
    for(var i=0;i<user.queue.length;i++)
    {
      console.log(user.queue[i])
      queue_tracks[i]= await track.findById(user.queue[i]);
    }
    res.status(200).json({
      status: "success",
      queue_tracks
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};



     exports.forgetPassword =   async  (req, res) => {

          /**
          *    This finds the user that will be sent the recovery email and checks if he even exists
          * 
          */
          const user = await User.findById(req.body.id);
          if (!user) { res.status(404).send({ error: "User doesnt exist" }) }
      
          else {
      
            /**
          *    genetartes a random password
          * 
          */
            const userEmail = user.email;
            const newPass = Math.floor((Math.random() * 10000) * Math.random() * 10000 * (Math.random() * 10000));
            const newPassString = newPass.toString();
      
            /**
            *   setting up nodemailer with the memestock email
            * 
            */
           const trans = nodeMailer.createTransport
           ({
             service: 'gmail',
             secure: false,
             port: 25,
             auth:
             {
               user: "projectxdevteam32@gmail.com",
               pass: "projectxteam1!"
             },
             tls: { rejectUnauthorized: false }
   
           });
      
            const helperOptions =
            {
              from: '"projectx" = projectxdevteam32@gmail.com',
              to: userEmail,
              subject: "Recover Password",
              text: "Your new password is:  " + newPass + "\n You are advised to change it when you can.\n \n  \n  Projectx team"
            };
      
      
            trans.sendMail(helperOptions, (err, info) => {
              if (err) { res.send({ error: "mailing service is currently down",errorM : err }) }
      
      
              /**
             *    This sets password to the new random passwrod that was sent in the email
             * 
             */
              else {
                console.log("hello");
                bcrypt.hash(newPassString, "secretcode").then(function (hash) {
                  
                  console.log("hello");
      
                  User.findByIdAndUpdate(
                    
                    req.body.id,
                    { password: hash }
                  ).then(function (RetUser) {
                    console.log("hello");
                    
                    res.status(200).send({ message: "Please check your registered email" });
                    
                    
                  }).catch((error)=> {console.log(error)});
                }).catch()
              }
            });
      
      
      
          }
        }