const express = require('express');
const artistController = require(`./../controllers/artistController`);
const router = new express.Router();

router
.route("/artists/:id")
.get(artistController.getArtist)
.delete(artistController.deleteArtist);


router
.route("/artists/:id/albums")
.get(artistController.getArtistAlbums);

router
.route("/artists/:id/top-tracks")
.get(artistController.getArtistTopTracks);


router
.route("/artists/{id}/related-artists")
.get(artistController.getArtistRelatedArtists);



router
.route("/artists")
.get(artistController.getArtists);



module.exports=router;