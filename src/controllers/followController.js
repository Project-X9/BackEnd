const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const Album = require(`./../models/album.js`);
const track = require(`./../models/track.js`);
const Artist = require(`./../models/artist.js`);
const notificationHandler = require('./../notificationHandler')


/**
 * @module controller/follows
*/

function paginator(arr, perpage, page) {
  return arr.slice(perpage*(page-1), perpage*page);
}



/**
 * @property {Function} getAllfollowers  get list of followers of user
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {object} res - response object
 * @param {string[]}res.body.followers - array of followers ids
 */
exports.getAllfollowers = async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    //paginator(user.followers,req.query.perpage,req.query.page)
    if(user!==null)
      {
        res.status(200).json({
          status: "success",
          followers: user.followers
        });
      }else{
        var err= "invalid id";
        throw err;
      }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

/**
 * @property {Function} followUser  add user2 to the user1's following array and add user1 to the followers of user2.
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of user to be followed
 */
exports.followUser = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      for (var i = 0; i < IN_User.following.length; i++) {
        if (req.params.id == IN_User.following[i]) {
          count++;
        }
      }
      if (count !== 0) {
        return res.status(403).json({ data: "already followed " });
      }
      await User.findByIdAndUpdate(req.body.id, {
        $push: { following: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $push: { followers: req.body.id },
      });
      res.status(200).json({
        status: "success",
      });

      se;
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
 * @property {Function} unfollowUser  remove user2 from the user1's following array and removes user1 from the followers of user2.
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of user to be unfollowed
 */
exports.unfollowUser = async (req, res) => {
  try {
    const IN_User_Artist = await User.findById(req.body.id);
    if (IN_User_Artist !== null) {
      var count = 0;
      for (var i = 0; i < IN_User_Artist.following.length; i++) {
        if (req.params.id == IN_User_Artist.following[i]) {
          count++;
        }
      }

      if (count === 0) {
        return res.status(403).json({ data: "invalid deletion" });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $pull: { following: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $pull: { followers: req.body.id },
      });

      res.status(200).json({
        status: "success",
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
 * @property {Function} followPlaylist  add a playlist to the user's playlists array and add the user to the array of followers of this playlist
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of playlist to be followed
 */
exports.followPlaylist = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      var not_deleted = 0;

      console.log(req.body.id);
      console.log(req.params.id);
      for (var i = 0; i < IN_User.playlists.length; i++) {
        if (req.params.id == IN_User.playlists[i]) {
          count++;
        }
      }
      for (var i = 0; i < IN_User.deletedPlaylists.length; i++) {
        if (req.params.id == IN_User.deletedPlaylists[i]) {
          not_deleted++;
        }
      }

      if (count !== 0) {
        return res.status(403).json({ data: "already followed" });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $push: { playlists: req.params.id },
      });
      await Playlist.findByIdAndUpdate(req.params.id, {
        $push: { followers: req.body.id },
      });

      //remove from deleted playlists 
      if (not_deleted !== 0) {
        await User.findByIdAndUpdate(req.body.id, {
          $pull: { deletedPlaylists: req.params.id },
        });
      }
     
      res.status(200).json({
        status: "success"
      });

      sendNotification(req.body.recipientId);
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
 * @property {Function} unfollowPlaylist  remove a playlist from the user's playlists array and remove the user to the array of followers of this playlist
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of playlist to be unfollowed
 */
exports.unfollowPlaylist = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      var deleted = 0;
      for (var i = 0; i < IN_User.playlists.length; i++) {
        if (req.params.id == IN_User.playlists[i]) {
          count++;
        }
      }
      for (var i = 0; i < IN_User.deletedPlaylists.length; i++) {
        if (req.params.id == IN_User.deletedPlaylists[i]) {
            deleted++;
        }
      }
      if (count === 0) {
        return res.status(403).json({ data: "invalid deletion" });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $pull: { playlists: req.params.id },
      });
      await Playlist.findByIdAndUpdate(req.params.id, {
        $pull: { followers: req.body.id },
      });
      //add to deleted playlists 

      if (deleted === 0) {
        await User.findByIdAndUpdate(req.body.id, {
          $push: { deletedPlaylists: req.params.id },
        });
      }
    
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
 * @property {Function} followTracks  add a track to the user's tracks array and add the user to the array of likers of this track
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of track to be followed
 */
exports.followTracks = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      for (var i = 0; i < IN_User.tracks.length; i++) {
        if (req.params.id == IN_User.tracks[i]) {
          count++;
        }
      }

      if (count !== 0) {
        return res.status(403).json({ data: "already followed" });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $push: { tracks: req.params.id },
      });
      await track.findByIdAndUpdate(req.params.id, {
        $push: { likers: req.body.id },
      });
      res.status(200).json({
        status: "success",
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
 * @property {Function} unfollowTracks  remove a track from the user's tracks array and remove the user to the array of likers of this track
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of track to be unfollowed
 */
exports.unfollowTracks = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      for (var i = 0; i < IN_User.tracks.length; i++) {
        if (req.params.id == IN_User.tracks[i]) {
          count++;
        }
      }

      if (count === 0) {
        return res.status(403).json({ data: "invalid deletion" });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $pull: { tracks: req.params.id },
      });
      await track.findByIdAndUpdate(req.params.id, {
        $pull: { likers: req.body.id },
      });
      res.status(200).json({
        status: "success",
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
   * @property {Function} followArtist  add an artist to the user's artists array and add the user to the array of followers of this artist
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id -  id of artist to be followed
*/
exports.followArtist = async (req, res) => {
  try {
     const IN_User= await User.findById(req.body.id);
    if(IN_User!==null)
    {
      var count =0;
      for(var i = 0; i < IN_User.artists.length; i++){
        if( req.params.id == IN_User.artists[i]){ count++; } }

      if(count!==0){ return res.status(403).json({ data : "already followed"})}
      
      await User.findByIdAndUpdate(req.body.id,{ $push:{artists: req.params.id} });
      const artist = await Artist.findByIdAndUpdate(req.params.id,{ $push:{followers: req.body.id} });
      
      const payload = {
        event: "follow-artist",
        time: Date.now(),
        senderId: req.body.id,
        read: false
      };
      notificationHandler.sendNotificationToArtist(payload, req.params.id);
      
      
      res.status(200).json({
        status: "success"
      });
    }else{
      var err= "invalid id";
      throw err;
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};




/**
 * @property {Function} unfollowArtist  remove an artist from the user's artists array and remove the user to the array of followers of this artist
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of artist to be unfollowed
 */
exports.unfollowArtist = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) 
    {
          var count = 0;
          for (var i = 0; i < IN_User.artists.length; i++) {
            if (req.params.id == IN_User.artists[i]) {
              count++;
            }
          }

        if(count===0){ return res.status(403).json({ data : "invalid deletion"})}
        
        await User.findByIdAndUpdate(req.body.id,{ $pull:{artists: req.params.id} });
        await Artist.findByIdAndUpdate(req.params.id,{ $pull:{followers: req.body.id} });
        
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
 * @property {Function} followAlbum  add an Album to the user's album array and add the user to the array of followers of this album
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id -  id of album to be followed
 */
exports.followAlbum = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      for (var i = 0; i < IN_User.albums.length; i++) {
        if (req.params.id == IN_User.albums[i]) {
          count++;
        }
      }

      if (count !== 0) {
        return res.status(403).json({ data: "already followed " });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $push: { albums: req.params.id },
      });
      await Album.findByIdAndUpdate(req.params.id, {
        $push: { followers: req.body.id },
      });
      res.status(200).json({
        status: "success",
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
 * @property {Function} unfollowAlbum  remove an Album from the user's album array and remove the user to the array of followers of this album
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of album to be unfollowed
 */
exports.unfollowAlbum = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      for (var i = 0; i < IN_User.albums.length; i++) {
        if (req.params.id == IN_User.albums[i]) {
          count++;
        }
      }

      if (count === 0) {
        return res.status(403).json({ data: "invalid deletion" });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $pull: { albums: req.params.id },
      });
      await Album.findByIdAndUpdate(req.params.id, {
        $pull: { followers: req.body.id },
      });
      console.log(us);
      res.status(200).json({
        status: "success",
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
 * @property {Function} addtoQueue  add a track to the user's Queue array 
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of track to be added
 */
exports.addtoQueue = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      for (var i = 0; i < IN_User.tracks.length; i++) {
        if (req.params.id == IN_User.queue[i]) {
          return res.status(403).json({ data: "already in queue" });
        }
      }
      await User.findByIdAndUpdate(req.body.id, {
        $push: { queue: req.params.id },
      });
      res.status(200).json({
        status: "success",
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
 * @property {Function} removefromQueue  remove a track from the user's queue array 
 * @param {object} req - request object
 * @param {string} req.body.id - user id
 * @param {string} req.params.id - id of track to be removed
 */
exports.removefromQueue = async (req, res) => {
  try {
    const IN_User = await User.findById(req.body.id);
    if (IN_User !== null) {
      var count = 0;
      for (var i = 0; i < IN_User.tracks.length; i++) {
        if (req.params.id == IN_User.queue[i]) {
          count++;
        }
      }

      if (count === 0) {
        return res.status(403).json({ data: "invalid deletion" });
      }

      await User.findByIdAndUpdate(req.body.id, {
        $pull: { queue: req.params.id },
      });
      res.status(200).json({
        status: "success",
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
