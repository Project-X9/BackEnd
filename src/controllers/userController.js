const User = require(`./../models/user.js`);
const ObjectId = require("mongodb").ObjectId;


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json({
        status: "success",
        data: {
          user
        }
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Id not found",
      error: err.message
    });
  }
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  }
  res.status(404).json({
    status: "fail",
    message: "Id not found"
  });
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};

exports.getTracks = async (req, res) => {
  try {
    const tracks = await User.findById(req.params.id, "tracks");
    res.status(200).json({
      status: "success",
      data: {
        user: tracks
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message
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
    await User.findByIdAndUpdate(req.params.id, {$pullAll: {tracks: req,params, trackId}});

    res.status(204).json({
      status: 'success'
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
}

exports.getAlbums = async (req, res) => {
  try {
    const albums = await User.findById(req.params.id, "albums");
    res.status(200).json({
      status: "success",
      data: {
        albums
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
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
    await User.findByIdAndUpdate(req.params.id, {$pullAll: {albums: req,params, albumId}});

    res.status(204).json({
      status: 'success'
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
}

//============================== (AUTHENTICATION) =========================
exports.login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send(user); // we will just send json with user info untill its implemented to direct user to his homepage.
  } catch (e) {
    res.status(400).send("Cannot login");
  }
};
