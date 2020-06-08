const Album = require(`./../models/album.js`);
const Track = require(`./../models/track.js`);

/**
 * @module controller/album
*/




//I NEED TO KNOW WILL ARTIST ONLY ACCESS THIS ?

// exports.getAllAlbums() = async (req,res) =>
// {

// }

/**
   * @property {Function} getAlbumById  creats a new album 
   * @param {object} req - request object
   * @param {string} req.params.id - album id 
   * @param {object} res - response object
   * @param {object} res.body.data - returns the newly created album object
*/

exports.getAlbumById =async (req, res)=>
{
    try {
        console.log(req);
        const album = await Album.findById(req.params.id).populate([{path: 'followers'},{path: 'artists'},{path: 'author'},{path: 'tracks', populate: ['artists','genres']}]);;
        res.status(200).json({
          status: "success",
          data: {
            album
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
/**
   * @property {Function} getAlbumTracks  get album tracks 
   * @param {object} req - request object
   * @param {string} req.params.id - album id 
   * @param {object} res - response object
   * @param {object} res.body.data - returns the added track ids
*/

exports.getAlbumTracks  = async (req, res) => {    //api done
    try {
      const albumTracks = await Album.findById(req.params.id, "trackIds");
      res.status(200).json({
        status: "success",
        data: {
          trackIds                 // should i return tracks or track ids ?
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



// NEW FEATURE:

/**
   * @property {Function} uploadAlbumPhoto  uploads a photo of the specified album
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {string} req.params.id - album id 
   * @param {object} req.body.image - desired image url
*/

exports.uploadAlbumPhoto  = async (req, res) => {    //api done
  try {
    const album = await Album.findByIdAndUpdate(req.params.id,{image: req.body.image}, {
      new: true,
      runValidators: true
     
    });
    res.status(200).json({
      status: "success",
      data: {
        album
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


// NEW FEATURE #2:

/**
 * @property {Function} getAlbumStatistics  get album statistics : 1- number of likers   2-number of listeners
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {string} req.params.id - album id 
 * @param {object} res.body - contains the 2 results : Number of listeners & Number of likes
*/



exports.getAlbumStatistics  = async (req, res) => {    //api done
  try {
    const album = await Album.findById(req.params.id);

    const AlbumTracks = album.tracks;

    if (AlbumTracks !== null)
    {
      var playedTracksCount =0;
      var likersCount =0;

      for(var i = 0; i < AlbumTracks.length; i++)
      {
       
        var TempTrack= await Track.findById(AlbumTracks[i]);

        playedTracksCount =playedTracksCount + TempTrack.playcount;
        likersCount= likersCount + TempTrack.likers.length;

      }
    }
    
    res.status(200).json({
      status: "success",
      data: {
        "Number of listeners " :playedTracksCount,
        "Number of likes " : likersCount

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


