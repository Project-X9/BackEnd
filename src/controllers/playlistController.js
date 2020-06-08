const Playlist = require(`./../models/playlist.js`);
const Track = require(`./../models/track.js`);
const mongoose = require('mongoose');
const User = require(`./../models/user.js`);

/**
 * @module controller/playlist
*/

//                                    ----CREATE :----



/**
   * @property {Function} createPlaylist  creats a new playlist 
   * @param {object} req - request object
   * @param {string} req.body.id - playlist id 
   * @param {string} req.params.id - user's id 
   * @param {object} res - response object
   * @param {object} res.body.data - returns the newly created playlist object
*/

exports.createPlaylist = async (req, res) => {    
  try {
    const newPlaylist = await Playlist.create(req.body);
    
    await User.findByIdAndUpdate(req.params.id,{ $push:{CreatedPlaylists: newPlaylist._id} });


    res.status(201).json({
      status: "success",
      data: {
        playlist : newPlaylist
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



//                                    ----GET :----

/**
   * @property {Function} getPlaylistById  gets the playlist object with the specified ID 
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {string} req.params.id - playlist id 
   * @param {object} res.body.data - returns the playlist object with specified ID
*/

exports.getPlaylistById  = async (req, res) => {    
    try {
      const playlist = await Playlist.findById(req.params.id).populate([{path: 'artists'},{path: 'author'},{path: 'tracks', populate: ['artists','genres']}]);;
      res.status(200).json({
        status: "success",
        data: {
          playlist
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

// DO I NEED GET PLAYLIST BY NAME ??
/**
   * @property {Function} getPlaylistTracks  gets the tracks of thr specified playlist
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {string} req.params.id - playlist id 
   * @param {object} res.body.data - returns the tracks of playlist with specified ID
*/

exports.getPlaylistTracks  = async (req, res) => {    
  try {
    const playlistTracks = await Playlist.findById(req.params.id, "tracks").populate({path: 'tracks', populate: ['artists','genres']});
    res.status(200).json({
      status: "success",
      data: {
        playlistTracks                 // should i return tracks or track ids ?
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

//NOT IN SPOTIFY API

//   exports.getPlaylistFollowers  = async (req, res) => {    
//     try {
//       const playlistFollowers = await Playlist.findById(req.params.id, "followers");
//       res.status(200).json({
//         status: "success",
//         data: {
//           followers                 
//         }
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(404).json({
//         status: "fail",
//         message: err.message        
//       });
//     }
//     }; 

/**
   * @property {Function} getAllPlaylists  gets all playlists in database
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} res.body.data - returns the playlists objects
*/
exports.getAllPlaylists= async(req, res) =>
{
  try 
  {
    const playlists = await Playlist.find();
    res.status(200).json({
      status: "success",
      data: {playlists}
    });
  } catch (err)
  {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }

}

//////////////////////////////////////////////////////////////////////////////
// NEW FEATURE :

/**
   * @property {Function} getMostPlayedPlaylist  gets the most played playlists in database
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} res.body.data - returns the most played playlist's ID and the number of times it was played
*/

exports.getMostPlayedPlaylist= async(req, res) =>
{

  try 
  {
    
    const getAllPlaylists = await Playlist.find();

    if (getAllPlaylists !== null)
    {
      var count = 0;
      var MaxPlayedCount=0;
      var temp;
      var MaxPlayedID = 0; 
      var TotalPlayed=0;

      for (var i = 0; i < getAllPlaylists.length; i++) 
      {
        
        TotalPlayed=0;

        var PlaylistTracks=getAllPlaylists[i].tracks;
  
        if (PlaylistTracks !== null)
        {
          console.log("PLAYLIST TRACKS NUMBER: "+ PlaylistTracks.length)
          for(var j=0; j<PlaylistTracks.length; j++ )
          {
            const trackTemp= await Track.findById(PlaylistTracks[j]);
            
            var pc= trackTemp.playcount;
            TotalPlayed=TotalPlayed + pc ;
            
          } 
        
          if(TotalPlayed > MaxPlayedCount)
          {
            MaxPlayedCount=TotalPlayed;
            MaxPlayedID= getAllPlaylists[i]._id;

          }
        }

        
      }
    
    
      res.status(200).json({
        status: "success",
        data:{"Max Played ID " :MaxPlayedID, "Max played count ":MaxPlayedCount, "Playlistls length: ": getAllPlaylists.length}
      });
    }

  
  } catch (err)
  {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }


}





//                                    ----DELETE :----


//NOT IN SPOTIFY API

//   exports.deletePlaylist = async (req, res) => {
//     try {
//       await Playlist.findByIdAndDelete(req.params.id);
//       res.status(204).json({
//         status: "success",
//         data: null
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(404).json({
//         status: "fail",
//         message: err.message
//       });
//     }
//   };

/**
   * @property {Function} deletePlaylistTarck  gets all playlists in database
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {string} req.params.id - playlist id 
*/

  exports.deletePlaylistTarck = async (req, res) => {
    try {
      const playlist = await Playlist.findByIdAndUpdate(req.query.id,{ $pull:{trackIds: req.query.id} });
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


  //                                    ----UPDATE :----

  /**
   * @property {Function} updatePlaylist  updates playlist with specified ID
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {string} req.params.id - playlist id 
   * @param {object} res.body.data - returns the  playlist with specified ID after update
   
*/

  exports.updatePlaylist = async (req, res) => {      //for anything except adding & deleting tracks
    try {
      const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      res.status(200).json({
        status: "success",
        data: {
         playlist
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

 /**
   * @property {Function} addPlaylistTrack  updates playlist with specified ID
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {string} req.query.id - playlist id 
   * @param {object} res.body.data - returns the  playlist with specified ID after adding the track specified
   * @param {string} req.query.id1 - track id to be added
*/

  exports.addPlaylistTrack= async (req, res) =>
  {
    try {
      const playlist = await Playlist.findByIdAndUpdate(req.body.id,{ $push:{tracks: req.params.id} });   
       res.status(200).json({
        status: "success",
        data: {
         playlist
        }
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
  }

  

  
