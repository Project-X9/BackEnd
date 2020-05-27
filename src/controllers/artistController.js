/**
 * @module controller/artist
*/

const Artist = require(`./../models/artist.js`);
const Track = require(`./../models/track.js`);
const webpush = require('web-push')
const User = require(`./../models/user.js`);


//-----------------------------------------------------------------------------------------//


exports.addTracks = async (req, res) => {
  try {
    const artist= await Artist.findById(req.body.id);
    const id = req.body.id;
    const track_id='12341';
    if(artist!==null)
    {
      // create new track
      // get track id and push it in tracks
      
      //await Artist.findByIdAndUpdate(req.body.id,{ $push:{tracks:track_id } });
      //send to users a notification
      for(var i = 0; i < artist.followers.length; i++)
      {
          // const recipientSubscription = await User.findById(artist.followers[i], 'pushSubscription');
          const recipientSubscription = req.body.subscription;
          console.log(recipientSubscription);
          const payload = JSON.stringify({id,track_id});
          webpush.sendNotification(recipientSubscription, payload);
          //save notification (user)
      }

      res.status(200).json({
        status: "success"
      });
    }
    else{
      var err= "invalid id";
      throw err;
    }
  } 
  catch (err) 
  {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.addAlbums = async (req, res) => {
  try {
    const artist= await Artist.findById(req.body.id);
    const id = req.body.id;
    const album_id='12341';
    if(artist!==null)
    {
      // create new track
      // get track id and push it in albums
      
      //await Artist.findByIdAndUpdate(req.body.id,{ $push:{albums:album_id } });
      //send to users a notification
      for(var i = 0; i < artist.followers.length; i++)
      {
          // const recipientSubscription = await User.findById(artist.followers[i], 'pushSubscription');
          const recipientSubscription = req.body.subscription;
          console.log(recipientSubscription);
          const payload = JSON.stringify({id,album_id});
          webpush.sendNotification(recipientSubscription, payload);
          //save notification (user)
      }

      res.status(200).json({
        status: "success"
      });
    }
    else{
      var err= "invalid id";
      throw err;
    }
  } 
  catch (err) 
  {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err
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
