const express = require("express");
const router = new express.Router();

const PController = require(`./../controllers/playlistController`); 

router.route("/:id")
    .get(PController.getPlaylistById)           
    .delete(PController.deletePlaylist)         
    .patch(PController.updatePlaylist);     



router
  .route("/")
  .post(playlistController.createPlaylist);




router
    .route("/tracks")                          
    .get(PController.getPlaylistTracks)            
    .delete(PController.deletePlaylistTarck);      


//.patch(PController.addPlaylistTracks)           is it needed or is update enough ?
//     .get(PController.getPlaylistByName);       // what iF i have many with the same name? returns an arr of playlist

module.exports = router;

