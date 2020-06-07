const express = require('express');
const artistController = require(`./../controllers/artistController`);
const router = new express.Router();

router
.route("/artists/:id")
.get(artistController.getArtist)
.delete(artistController.deleteArtist)
.patch(artistController.addArtistAlbum);


router
.route("/artists/:id/:id1")
.delete(artistController.deleteArtistAlbum)
.patch(artistController.UpdateArtistAlbum);

router
.route("/artists/:id/albums")
.get(artistController.getArtistAlbums);

router
.route("/artists/:id/related-artists")
.get(artistController.getArtistRelatedArtists);

router
.route("/artists")
.get(artistController.getArtists);

router
     .route("/getTopTracks")
     .get(artistController.getTopTracks)

module.exports=router;
