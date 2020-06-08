const express = require('express');
const router = new express.Router();

const AController = require(`./../controllers/albumController`); 


// router
//     .route("/")
//     .get(AController.getAllAlbums);


router
    .route("/:id")
    .get(AController.getAlbumById)
    .patch(AController.uploadAlbumPhoto);

router
    .route("/:id/tracks")
    .get(AController.getAlbumTracks);

module.exports = router;
