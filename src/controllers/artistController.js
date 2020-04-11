/**
 * @module controller/artist
*/

const Artist = require(`./../models/artist.js`);






exports.getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json({
      status: "success",
      results: artists.length,
      data: {
        artists
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
 * @property  {Function} getArtist
 *  @param {object} req - request object
 * @param {string} req.params.id  -artist id
 * @param {object} res - response object
 * @param  {String} res.body.Bio 
 * @param  {String[]} res.body.followers
 * @param  {CategoryId[]} res.body.genres
 * @param  {TrackId[]} res.body.tracks
 * @param  {String} res.body.image
 * @param  {String} res.body.name
 * @param  {ArtistId[]} res.body.relatedArtists
 * @param  {String} res.body.email
 * @param  {String} res.body.password
 * @param  {Date} res.body.dateAdded
 * 
 */





exports.getArtist = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id).populate([{path: 'followers'},{path: 'tracks', populate: ['artists','genres']}]);



    res.status(200).json({
      status: "success",
      data: {
        artist
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



exports.deleteArtist = async (req, res) => {
  try {
    await Artist.findByIdAndDelete(req.params.id);
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
 * @property {Function} getArtistTopTracks
 * @param {object} res 
 * @param {object[]} res.body.tracks  
 * 
 */




exports.getArtistTopTracks = async (req, res) => {
  try {
    const tracks = await Artist.findById(req.params.id, "tracks");
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
 * @property {Function} getArtistAlbums
 * @param {object} res 
 * @param {object[]} res.body.albums  
 * 
 */


exports.getArtistAlbums = async (req, res) => {
  try {
    const albums = await Artist.findById(req.params.id, "albums");
    res.status(200).json({
      status: "success",
      data: {
        albums
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
 * @property {Function} getArtistRelatedArtists
 * @param {object} res 
 * @param {object[]} res.body.artists  
 * 
 */




exports.getArtistRelatedArtists = async (req, res) => {
  try {
    const relatedArtists = await Artist.findById(req.params.id, `${req.params.type}`);

    res.status(200).json({
      status: 'success',
      type: req.params.type,
      data: {
        relatedArtists
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Not Found'
    })
  }
};
