const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const Album = require(`./../models/album.js`);
const track = require(`./../models/track.js`);
const Artist = require(`./../models/artist.js`);

exports.getAllArtists = async (req, res) => {
  try {
    const Artists = await Artist.find();
    res.status(200).json({
      status: "success",
      results: Artists.length,
      data: Artists
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};

/*
exports.getAllplaylist = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    console.log(playlists)
    res.status(200).json({
      status: "success",
      results: playlists.length,
      data: playlists
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};
*/


/*
    get all followers by id given as a query parameter
 */
exports.getAllfollowers = async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    res.status(200).json({
      status: "success",
      data: user.followers
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};

/*
   follow user
 */
exports.followUser = async (req, res) => {
    try {
      const IN_User_Artist= await User.findById(req.query.id);
      if(IN_User_Artist.followers.filter(user => 
        user === req.query.id1 )){
        return res.status(403).json({ alreadyfollow : "You already followed this user"})
      }
      const user = await User.findByIdAndUpdate(req.query.id,{ $push:{following: req.query.id1} });
      const user2 = await User.findByIdAndUpdate(req.query.id1,{ $push:{followers: req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };


  /*
   unfollow user
    */
  exports.unfollowUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.query.id,{ $pull:{following: req.query.id1} });
      const user2 = await User.findByIdAndUpdate(req.query.id1,{ $pull:{followers: req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

/*
    Like/follow albums
    */
   exports.likeAlbum = async (req, res) => {
    try {
      const IN_User_Artist= await User.findById(req.query.id);
      if(IN_User_Artist.albums.filter(user => 
        user === req.query.id1 )){
        return res.status(403).json({ alreadyfollow : "You already followed thihs album"})
      }
      const user = await User.findByIdAndUpdate(req.query.id,{ $push:{albums: req.query.id1} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

   /*
         disLike/unfollow albums
    */
   exports.dislikeAlbum = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.query.id,{ $pull:{albums: req.query.id1} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

  
  /*Like/follow tracks*/
  exports.likeTracks = async (req, res) => {
    try {
      const IN_User_Artist= await User.findById(req.query.id);
      if(IN_User_Artist.tracks.filter(user => 
        user === req.query.id1 )){
        return res.status(403).json({ alreadyfollow : "You already followed the track"})
      }
      const userIN = await User.findByIdAndUpdate(req.query.id,{ $push:{tracks: req.query.id1} });
      const trackIN = await track.findByIdAndUpdate(req.query.id1,{ $push:{likers: req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

    /* disLike/unfollow tracks*/
   exports.dislikeTracks= async (req, res) => {
    try {
      const userIN = await User.findByIdAndUpdate(req.query.id,{ $pull:{tracks: req.query.id1} });
      const trackIN = await track.findByIdAndUpdate(req.query.id1,{ $pull:{likers: req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

  /*Like/follow artists*/
  exports.likeArtist = async (req, res) => {
    try {
      // const IN_User_Artist= await User.findById(req.query.id);
      // if(IN_User_Artist.artists.filter(user => 
      //   user === req.query.id1 )){
      //   return res.status(403).json({ alreadyfollow : "You already followed the artist"})
      // }
      const user = await User.findByIdAndUpdate(req.query.id,{ $push:{artists: req.query.id1} });
      const artist = await Artist.findByIdAndUpdate(req.query.id1,{ $push:{followers: req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

    /* disLike/unfollow artists*/
   exports.dislikeArtist= async (req, res) => {
    try { 
      const user = await User.findByIdAndUpdate(req.query.id,{ $pull:{artists: req.query.id1} });
      const artist = await Artist.findByIdAndUpdate(req.query.id1,{ $pull:{followers: req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

  


  /*8888888888888888888888888888888888888888888 not tested yet  RUBA 88888888888888888888888888888888888888888888888888*/
  


   /*
    Like/follow playlist
    */
   exports.likePlaylist = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.query.id,{ $push:{playlists: req.query.id1} });
      const playlistRequired = await Playlist.findByIdAndUpdate(req.params.id1,{ $push:{followers:req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

   /*
         disLike/unfollow playlist
    */
   exports.dislikePlaylist = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.query.id,{ $pull:{playlists: req.query.id1} });
        const playlistRequired = await Playlist.findByIdAndUpdate(req.params.id1,{ $pull:{followers:req.query.id} });
      res.status(200).json({
        status: "success"
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };
   