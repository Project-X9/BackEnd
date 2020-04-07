const Playlist = require(`./../models/playlist.js`);



//                                    ----CREATE :----

exports.createPlaylist = async (req, res) => {    
  try {
    const newPlaylist = await Playlist.create(req.body);
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

exports.getPlaylistById  = async (req, res) => {    
    try {
      const playlist = await Playlist.findById(req.params.id).populate([{path: 'followers'},{path: 'artists'},{path: 'author'},{path: 'tracks', populate: ['artists','genres']}]);;
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



  exports.addPlaylistTrack= async (req, res) =>
  {
    try {
      const playlist = await Playlist.findByIdAndUpdate(req.query.id,{ $push:{trackIds: req.query.id1} });
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

  

  
