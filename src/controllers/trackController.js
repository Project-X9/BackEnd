

const Track = require(`./../models/track.js`);
const Category = require(`./../models/category.js`);
/** 
 * @module controller/tracks
 */



function paginator(arr, perpage, page) {
  return arr.slice(perpage*(page-1), perpage*page);
}

//--------------------------------------------SHOW SONGS BY GENRE------------------------------------------------//
/**
 * @property {Function} getTracksByGenresid  show tracks by genre s id 
 * @param {object} req - request object
 * @param {string} req.params.id - genre s id 
 * @param {int} req.query.perpage - numbers of tracks needed per page  (used for pagination)
 * @param {int} req.query.page - page number (used for pagination)
 * @param {object} res - response object
 * @param {string[]}res.body.tracks - array of tracks 
 */
    
    exports.getTracksByGenresid = async (req, res) => {
      try {
        const tracks_arr = await Track.find().populate("genres","name");
        const category = await Category.findById(req.params.id);
        const array = [];
        for(var i =0;i<tracks_arr.length;i++)
        {
          if(tracks_arr[i].genres[0].name == category.name)
          array.push(tracks_arr[i]);
        }
        const tracks = paginator(array,req.query.perpage,req.query.page);
        res.status(200).json({
          status: "success",
          data: {
            array
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


    // exports.getTracksByGenresName = async (req, res) => {
    //   try {
    //     const tracks_arr = await Track.find().populate("genres","name");;
    //     const tracks = [];
    //     for(var i =0;i<tracks_arr.length;i++)
    //     {
    //       if(tracks_arr[i].genres[0].name == req.body.genre)
    //           tracks.push(tracks_arr[i]);
    //     }
    //     res.status(200).json({
    //       status: "success",
    //       data: {
    //         tracks
    //       }
    //     });
    //   } catch (err) {
    //     console.log(err);
    //     res.status(404).json({
    //       status: "fail",
    //       message: err.message
    //     });
    //   }
    // };
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

/**
 * @property {Function} deleteTrack  delete track by id 
 * @param {object} req - request object
 * @param {string} req.params.id - track  id 
 * @param {object} res - response object
 */

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
/**
 * @property {Function} updateTrack  update track by id 
 * @param {object} req - request object
 * @param {string} req.params.id - track  id
 * @param {string} req.body - modification of track
 * @param {object} res - response object
 */
exports.updateTrack = async( req, res) =>{

 try{ 
   const trackEdited = await Track.findByIdAndUpdate(req.params.id,{$set:req.body});
  res.status(200).json({
    status: "success",
    data:
     {
      trackEdited
     }
    });
  }
    catch (err) {
      console.log(err);
      res.status(404).json({
        status: "fail",
        message: err.message
      });
    }
 
};
/*
artists :[{type: mongoose.Schema.Types.ObjectId,ref:'Artist'}],
    description : String,
    likers : [{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    name : String,
    playcount : Number,
    url : String,
    duration : Number,
    genres: [{type: mongoose.Schema.Types.ObjectId,ref:'Category'}],
    imageUrl : String,
    album: {type: mongoose.Schema.Types.ObjectId, ref: 'Album'}
});
*/

/**
 * @property {Function} addTrack  update track by id 
 * @param {object} req - request object
 * @param {string} req.body track specifications
 * @param {object} res - response object
 * @param {object} res.body.data track object returned
 */

exports.addTrack = async( req, res) =>{

  try{ 
    const track = new Track();
    track.name = req.body.name;
    track.description = req.body.description;
    track.url = req.body.url;
    track.imageUrl = req.body.imageUrl;
    const result = await track.save();
   res.status(200).json({
     status: "success",
     data:
      {
       track
      }
     });
   }
     catch (err) {
       console.log(err);
       res.status(404).json({
         status: "fail",
         message: err.message
       });
     }
  
 };