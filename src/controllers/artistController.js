/**
 * @module controller/artist
*/

const Artist = require(`./../models/artist.js`);
const Track = require(`./../models/track.js`);
const Album = require(`./../models/album.js`);
const webpush = require('web-push')
const User = require(`./../models/user.js`);




function paginator(arr, perpage, page) {
  return arr.slice(perpage*(page-1), perpage*page);
}

//-------------------------------------------top tracks of an artist----------------------------------------------//
/**
 * @property {Function} getTopTracks  get Top Tracks played of tis artist
 * @param {object} req - request object
 * @param {string} req.body.id - artist id
 * @param {int} req.query.perpage - numbers of tracks needed per page  (used for pagination)
 * @param {int} req.query.page - page number (used for pagination)
 * @param {object} res - response object
 * @param {string[]}res.body.tracks - array of top tracks retrieved ids
 */
 
exports.getTopTracks= async (req, res) => {
  try {
    const artist = await Artist.findById(req.body.id).populate("tracks","playCount");
    const array = [];
    const compare_value=20;
    for(var i =0; i<artist.tracks.length;i++)
    {
      track_playcount= await Track.findById(artist.tracks[i]);
      console.log(track_playcount.playcount)
      if(track_playcount.playcount> compare_value)
      {
          array.push(artist.tracks[i]);
          console.log(track_playcount)
      }
    }
    const tracks = paginator(array,req.query.perpage,req.query.page);
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


//-----------------------------------------------------------------------------------------//


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

// NEW FEATURES: TESTED


/**
   * @property {Function} addArtistAlbum  adds an existing album 
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {string} req.body.id - artist id 
   * @param {object} res.body.data - returns the artist with specified ID after adding the album specified
   * @param {string} req.params.id - id of album to be added
*/

exports.addArtistAlbum= async (req, res) =>
{
  try {
    const artist = await Artist.findByIdAndUpdate(req.body.id,{ $push:{albums: req.params.id} });   
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
}



/**
   * @property {Function} deleteArtistAlbum  delets the album with specified id
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} res.body.data - returns the artist with specified ID after deleting the album specified
   * @param {string} req.params.id - id of artist 
   * @param {string} req.params.id1 - id of album to be deleted
*/

exports.deleteArtistAlbum = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id,{ $pull:{albums: req.params.id1} }); 
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



/**
   * @property {Function} UpdateArtistAlbum  updates the album with specified id
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} res.body.data - contains the data to be modified for the album
   * @param {string} req.params.id - id of artist 
   * @param {string} req.params.id1 - id of album to be updated
*/

exports.UpdateArtistAlbum = async( req, res) =>{

  try {
    console.log(req.body);
    console.log(req.body.data);
    const artistAlbums = await Artist.findById(req.params.id, "albums"); // --> artist id
    
    if(artistAlbums!==null)
    {
      var count =0;
      for(var i = 0; i < artistAlbums.albums.length; i++)
      {
        if( req.params.id1  == artistAlbums.albums[i]){ count++; } 
      }

      if (count === 0) {
        return res.status(403).json({ data: "invalid update!" });
      }

      // the album exists in the atist --> now edit it :
        const ArtistModifiedAlbum = await Album.findByIdAndUpdate(req.params.id1, req.body, {
          new: true,
          runValidators: true
        });

    res.status(200).json({
      status: "success",
      data:
       {
         ArtistModifiedAlbum
       }
    });
  }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err.message
    });
  }
};


