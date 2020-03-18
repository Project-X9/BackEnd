const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const Album = require(`./../models/album.js`);
const track = require(`./../models/track.js`);
const Artist = require(`./../models/artist.js`);
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


  /* not tested yet*/
  
   /*
    Like/follow albums
    */
   exports.likeAlbum = async (req, res) => {
    try {
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


  /* tracks and artist remaining */