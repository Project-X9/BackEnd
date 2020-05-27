const User = require(`./../models/user.js`);
const Playlist = require(`./../models/playlist.js`);
const Album = require(`./../models/album.js`);
const track = require(`./../models/track.js`);
const Artist = require(`./../models/artist.js`);

/**
 * @module controller/follow
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
    if(user!==null)
      {
        res.status(200).json({
          status: "success",
          followers: paginator(user.followers,req.query.perpage,req.query.page)
        });
      }else{
        var err= "invalid id";
        throw err;
      }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
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
      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
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
   * @property {Function} unfollowUser  remove user2 from the user1's following array and removes user1 from the followers of user2.
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id - id of user to be unfollowed 
*/
  exports.unfollowUser = async (req, res) => {
    try {
      const IN_User_Artist= await User.findById(req.body.id);
      if(IN_User_Artist!==null)
      {
        var count =0;
        for(var i = 0; i < IN_User_Artist.following.length; i++){if( req.params.id == IN_User_Artist.following[i]){ count++;} }
  
        if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }
  
        await User.findByIdAndUpdate(req.body.id,{ $pull:{following: req.params.id} });
        await User.findByIdAndUpdate(req.params.id,{ $pull:{followers: req.body.id} });
  
        res.status(200).json({
          status: "success"
        });
      }
      else{
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
   * @property {Function} likePlaylist  add a playlist to the user's playlists array and add the user to the array of followers of this playlist
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id - id of playlist to be followed
*/
   exports.likePlaylist = async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
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
   * @property {Function} dislikePlaylist  remove a playlist from the user's playlists array and remove the user to the array of followers of this playlist
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id - id of playlist to be unfollowed
*/
   exports.dislikePlaylist = async (req, res) => {
    try {

      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
        var count =0;
        
        for(var i = 0; i < IN_User.playlists.length; i++){if( req.params.id == IN_User.playlists[i]){ count++;} }

        if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }

        await User.findByIdAndUpdate(req.body.id,{ $pull:{playlists: req.params.id} });
        await Playlist.findByIdAndUpdate(req.params.id,{ $pull:{followers:req.body.id} });
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
   * @property {Function} likeTracks  add a track to the user's tracks array and add the user to the array of likers of this track
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id - id of track to be followed
*/
  exports.likeTracks = async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
        var count =0;
        for(var i = 0; i < IN_User.tracks.length; i++){
          if( req.params.id == IN_User.tracks[i]){ count++; } }
          
        if(count!==0){ return res.status(403).json({ data : "already followed"})}

        await User.findByIdAndUpdate(req.body.id,{ $push:{tracks: req.params.id} });
        await track.findByIdAndUpdate(req.params.id,{ $push:{likers: req.body.id} });
        res.status(200).json({
          status: "success"
        });
      }
      else{
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
   * @property {Function} dislikeTracks  remove a track from the user's tracks array and remove the user to the array of likers of this track
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id - id of track to be unfollowed
*/
   exports.dislikeTracks= async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
        var count =0;
        for(var i = 0; i < IN_User.tracks.length; i++){if( req.params.id == IN_User.tracks[i]){ count++;} }

        if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }

        await User.findByIdAndUpdate(req.body.id,{ $pull:{tracks: req.params.id} });
        await track.findByIdAndUpdate(req.params.id,{ $pull:{likers: req.body.id} });
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
   * @property {Function} likeArtist  add an artist to the user's artists array and add the user to the array of followers of this artist
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id -  id of artist to be followed
*/
  exports.likeArtist = async (req, res) => {
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

        // const recipientSubscription = await User.findById(req.body.id, 'pushSubscription');
        //send to artist a notification
        const recipientSubscription = req.body.subscription;
        console.log(recipientSubscription);

        //res.status(201).json({});
        const payload = JSON.stringify({IN_User});
        webpush.sendNotification(recipientSubscription, payload);
        await Artist.findByIdAndUpdate(req.params.id,{ $push:{notifications: req.body.id} });
        
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
   * @property {Function} dislikeArtist  remove an artist from the user's artists array and remove the user to the array of followers of this artist
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id - id of artist to be unfollowed
   */
   exports.dislikeArtist= async (req, res) => {
    try { 
      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
        var count =0;
        for(var i = 0; i < IN_User.artists.length; i++){if( req.params.id == IN_User.artists[i]){ count++;} }

        if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }
        
        await User.findByIdAndUpdate(req.body.id,{ $pull:{artists: req.params.id} });
        await Artist.findByIdAndUpdate(req.params.id,{ $pull:{followers: req.body.id} });
        res.status(200).json({
          status: "success"
        });
      }else{
        var err= "invalid id";
        throw err;
      }
    } catch (err) 
    {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err
      });
    }
  };

  





   /**
   * @property {Function} likeAlbum  add an Album to the user's album array and add the user to the array of followers of this album
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id -  id of album to be followed
*/
   exports.likeAlbum = async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
        var count =0;
        for(var i = 0; i < IN_User.albums.length; i++){
          if( req.params.id == IN_User.albums[i]){ count++; } }
          
        if(count!==0){ return res.status(403).json({ data : "already followed "})}

        
        await User.findByIdAndUpdate(req.body.id,{ $push:{albums: req.params.id} });
        await Album.findByIdAndUpdate(req.params.id,{ $push:{followers: req.body.id} });
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
   * @property {Function} dislikeAlbum  remove an Album from the user's album array and remove the user to the array of followers of this album
   * @param {object} req - request object
   * @param {string} req.body.id - user id   
   * @param {string} req.params.id - id of album to be unfollowed
*/
   exports.dislikeAlbum = async (req, res) => {
    try {
      const IN_User= await User.findById(req.body.id);
      if(IN_User!==null)
      {
        var count =0;
        for(var i = 0; i < IN_User.albums.length; i++){if( req.params.id == IN_User.albums[i]){ count++;} }

        if(count===0) { return res.status(403).json({ data : "invalid deletion"}) }

        const us =await User.findByIdAndUpdate(req.body.id,{ $pull:{albums: req.params.id} });
        await Album.findByIdAndUpdate(req.params.id,{ $pull:{followers: req.body.id} });
        console.log(us)
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

