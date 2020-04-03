const express = require("express");
const router = new express.Router();

const PController = require(`./../controllers/playlistController`); 

router.route("/:id")
    .get(PController.getPlaylistById)                  
    .patch(PController.updatePlaylist);     



router
  .route("/")
  .post(playlistController.createPlaylist);




router
    .route("/:id/tracks")                          
    .get(PController.getPlaylistTracks)  
    .post(PController.addPlaylistTrack)
    .delete(PController.deletePlaylistTarck);      



//     .get(PController.getPlaylistByName);       // what iF i have many with the same name? returns an arr of playlists?

module.exports = router;

