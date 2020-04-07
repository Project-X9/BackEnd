const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const Album = require(`./../models/album.js`);
const track = require(`./../models/track.js`);
const Artist = require(`./../models/artist.js`);

/*
    get all followers by id given as a query parameter     DONE
 */
exports.getAllfollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      followers: user.followers
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
   follow user    DONE
 */
exports.followUser = async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_User.following.length; i++)
      {
        if( req.params.id == IN_User.following[i])
        { count++; }
       }
      if(count!==0){ return res.status(403).json({ data : "already followed "})}
      await User.findByIdAndUpdate(req.body.id,{ $push:{following: req.params.id} });
      await User.findByIdAndUpdate(req.params.id,{ $push:{followers: req.body.id} });
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
   unfollow user   DONE
    */
  exports.unfollowUser = async (req, res) => {
    try {
      const IN_User_Artist= await User.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_User_Artist.following.length; i++){if( req.params.id == IN_User_Artist.following[i]){ count++;} }

      if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }

      await User.findByIdAndUpdate(req.body.id,{ $pull:{following: req.params.id} });
      await User.findByIdAndUpdate(req.params.id,{ $pull:{followers: req.body.id} });

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
    Like/follow playlist DONE
    */
   exports.likePlaylist = async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
       var count =0;
       
      console.log(req.body.id)
      console.log(req.params.id)
       for(var i = 0; i < IN_User.playlists.length; i++){
         if( req.params.id == IN_User.playlists[i]){ count++; } }

      if(count!==0){ return res.status(403).json({ data : "already followed"})}
      
      await User.findByIdAndUpdate(req.body.id,{ $push:{playlists: req.params.id} });
      await Playlist.findByIdAndUpdate(req.params.id,{ $push:{followers:req.body.id} });
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
         disLike/unfollow playlist  DONE
    */
   exports.dislikePlaylist = async (req, res) => {
    try {

      const IN_User= await User.findById(req.body.id);
      var count =0;
      
      for(var i = 0; i < IN_User.playlists.length; i++){if( req.params.id == IN_User.playlists[i]){ count++;} }

      if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }

      await User.findByIdAndUpdate(req.body.id,{ $pull:{playlists: req.params.id} });
      await Playlist.findByIdAndUpdate(req.params.id,{ $pull:{followers:req.body.id} });
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








  
  /*Like/follow tracks    DONE*/ 
  exports.likeTracks = async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_User.tracks.length; i++){
        if( req.params.id == IN_User.tracks[i]){ count++; } }
        
      if(count!==0){ return res.status(403).json({ data : "already followed"})}

      await User.findByIdAndUpdate(req.body.id,{ $push:{tracks: req.params.id} });
      await track.findByIdAndUpdate(req.params.id,{ $push:{likers: req.body.id} });
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

    /* disLike/unfollow tracks   DONE*/
   exports.dislikeTracks= async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_User.tracks.length; i++){if( req.params.id == IN_User.tracks[i]){ count++;} }

      if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }

      await User.findByIdAndUpdate(req.body.id,{ $pull:{tracks: req.params.id} });
      await track.findByIdAndUpdate(req.params.id,{ $pull:{likers: req.body.id} });
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










  /*Like/follow artists  DONE */
  exports.likeArtist = async (req, res) => {
    try {
       const IN_User= await User.findById(req.body.id);
       var count =0;
       for(var i = 0; i < IN_User.artists.length; i++){
         if( req.params.id == IN_User.artists[i]){ count++; } }

      if(count!==0){ return res.status(403).json({ data : "already followed"})}
      
      await User.findByIdAndUpdate(req.body.id,{ $push:{artists: req.params.id} });
      await Artist.findByIdAndUpdate(req.params.id,{ $push:{followers: req.body.id} });
      res.status(200).json({
        status: "success"
      });1
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  };

    /* disLike/unfollow artists   DONE*/
   exports.dislikeArtist= async (req, res) => {
    try { 
      const IN_User= await User.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_User.artists.length; i++){if( req.params.id == IN_User.artists[i]){ count++;} }

      if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }
      
      await User.findByIdAndUpdate(req.body.id,{ $pull:{artists: req.params.id} });
      await Artist.findByIdAndUpdate(req.params.id,{ $pull:{followers: req.body.id} });
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
      const IN_User= await User.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_User.albums.length; i++){
        if( req.params.id == IN_User.albums[i]){ count++; } }
        
      if(count!==0){ return res.status(403).json({ data : "already followed "})}

      
      await User.findByIdAndUpdate(req.body.id,{ $push:{albums: req.params.id} });
      await Album.findByIdAndUpdate(req.params.id,{ $push:{followers: req.body.id} });
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
      const IN_User= await User.findById(req.body.id);
      var count =0;
      for(var i = 0; i < IN_User.albums.length; i++){if( req.params.id == IN_User.albums[i]){ count++;} }

      if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }

      const us =await User.findByIdAndUpdate(req.body.id,{ $pull:{albums: req.params.id} });
      await Album.findByIdAndUpdate(req.params.id,{ $pull:{followers: req.body.id} });
      console.log(us)
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


