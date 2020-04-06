const Album = require(`./../models/album.js`);


//I NEED TO KNOW WILL ARTIST ONLY ACCESS THIS ?

// exports.getAllAlbums() = async (req,res) =>
// {

// }


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




