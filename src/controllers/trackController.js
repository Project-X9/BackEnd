

const Track = require(`./../models/track.js`);
const Category = require(`./../models/category.js`);
/** 
 * @module controller/tracks
 */

//--------------------------------------------SHOW SONGS BY GENRE------------------------------------------------//
/**
   * @property {Function} getTracks  get all categories
   * @param {object} res - response object
   * @param {object[]} res.body.Tracks  - categories list
*/

    
    exports.getTracksByGenresid = async (req, res) => {
      try {
        const tracks_arr = await Track.find().populate("genres","name");
        const category = await Category.findById(req.params.id);
        const tracks = [];
        for(var i =0;i<tracks_arr.length;i++)
        {
          if(tracks_arr[i].genres[0].name == category.name)
              tracks.push(tracks_arr[i]);
        }
        res.status(200).json({
          status: "success",
          data: {
            tracks
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


    exports.getTracksByGenresName = async (req, res) => {
      try {
        const tracks_arr = await Track.find().populate("genres","name");;
        const tracks = [];
        for(var i =0;i<tracks_arr.length;i++)
        {
          if(tracks_arr[i].genres[0].name == req.body.genre)
              tracks.push(tracks_arr[i]);
        }
        res.status(200).json({
          status: "success",
          data: {
            tracks
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
//---------------------------------------------------------------------------------------------------------------//


/**
   * @property {Function} getTracks  get all tracks
   * @param {object} res - response object
   * @param {object[]} res.body.Tracks  - categories list
*/

exports.getTracks = async (req, res) => {
    try {
      const tracks = await Track.find();
      res.status(200).json({
        status: "success",
        data: {
          tracks
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
  * 
  * @property {Function} getTrack
  * @param {object} req - request object
  * @param {string} req.params.id  -tracks id
  * @param {object} res - response object
  * @param  {String} res.body.name
  * @param  {String} res.body.description
  * @param  {String} res.body.url
  * @param  {ArtistId[]} res.body.artists
  * @param  {Number} res.body.playcount
  * @param  {Number} res.body.duration
  * @param  {String} res.body.imageUrl
  * @param  {CategoryId[]} res.body.genres
  * @param  {String[]} res.body.body.likers
  * 
  * 
  */




exports.getTrack = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id).populate([{path: 'likers'},{path: 'album'},{path: 'artists'}]);
    res.status(200).json({
      status: "success",
      data: {
        track
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

exports.deleteTrack = async (req, res) => {
  try {
    await Track.findByIdAndDelete(req.params.id);
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
