const express = require("express");
const router = new express.Router();

const PController = require(`./../controllers/playlistController`); 

router.route("/:id")
    .get(PController.getPlaylistById)                  
    .patch(PController.updatePlaylist)
    .post(PController.createPlaylist);     



router
  .route("/")
  .get(PController.getAllPlaylists);

router
  .route("/p/maxPlayed")
      /**
* @api {get} /p/maxPlayed Gets the id of the playlist with the most listed to tracks
  * @apiName getMostPlayedPlaylist @apiGroup Playlist
  * @apiVersion  0.1.0
  * @apiSuccess (200) {JSON} JSON Object that contains : ID of the top played playlist & the number of times its trackes were played
 * @apiSuccessExample {JSON} Success-Response:
 * HTTP/1.1 OK
 * { 
 *    "status": "success",
      "data":
       {
        "Max Played ID": "5e8741dadfdb0a35d429a128",
        "Max Played Count": "53",
      }
 * }
* @apiUse Error404
*/
  .get(PController.getMostPlayedPlaylist);

router
    .route("/tracks/:id1")                          
    .get(PController.getPlaylistTracks);

router
    .route("/tracks/:id1/:id2")
    .patch(PController.addPlaylistTrack);
    
    
router
    .route("/deleteTrack/:id1/:id2") 
    .patch(PController.deletePlaylistTarck);





//     .get(PController.getPlaylistByName);       // what iF i have many with the same name? returns an arr of playlists?

module.exports = router;

