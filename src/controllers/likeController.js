const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);

/**
 * @module controller/like
*/



/**
 * @property {Function} likePlaylist  add a playlist to the user's playlists array and add the user to the array of followers of this playlist
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of playlist to be followed
 */
exports.likePlaylist = async (req, res) => {
    try {
      const IN_User = await User.findById(req.body.id);
      if (IN_User !== null) {
        var count = 0;
        for (var i = 0; i < IN_User.likedPlaylists.length; i++) {
          if (req.params.id == IN_User.likedPlaylists[i]) {
            count++;
          }
        }
        if (count !== 0) {
          return res.status(403).json({ data: "already liked" });
        }
  
        await User.findByIdAndUpdate(req.body.id, {
          $push: { likedPlaylists: req.params.id },
        });
        await Playlist.findByIdAndUpdate(req.params.id, {
          $push: { likers: req.body.id },
        });
  
       
        res.status(200).json({
          status: "success"
        });
  
      } else {
        var err = "invalid id";
        throw err;
      }
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };
  
  /**
   * @property {Function} dislikePlaylist  remove a playlist from the user's playlists array and remove the user to the array of followers of this playlist
   * @param {object} req - request object
   * @param {string} req.body.id - user id
   * @param {string} req.params.id - id of playlist to be unfollowed
   */
  exports.dislikePlaylist = async (req, res) => {
    try {
      const IN_User = await User.findById(req.body.id);
      if (IN_User !== null) {
        var count = 0;
        for (var i = 0; i < IN_User.likedPlaylists.length; i++) {
          if (req.params.id == IN_User.likedPlaylists[i]) {
            count++;
          }
        }
        if (count === 0) {
          return res.status(403).json({ data: "invalid deletion" });
        }
  
        await User.findByIdAndUpdate(req.body.id, {
          $pull: { likedPlaylists: req.params.id },
        });
        await Playlist.findByIdAndUpdate(req.params.id, {
          $pull: { likers: req.body.id },
        });
  
       
        res.status(200).json({
          status: "success"
        });
  
      } else {
        var err = "invalid id";
        throw err;
      }
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };
  