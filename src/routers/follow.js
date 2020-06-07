const express = require('express');
const router = new express.Router();
const followController = require(`./../controllers/followController`);

router
    .route("/getfollowers")
    .get(followController.getAllfollowers)

router
    .route("/user/:id")
    .patch(followController.followUser)

router
    .route("/user/un/:id")    
    .patch(followController.unfollowUser)

router
    .route("/playlist/:id")
    .patch(followController.followPlaylist)

router
    .route("/playlist/un/:id")
    .patch(followController.unfollowPlaylist)

router
    .route("/album/:id")
    .patch(followController.followAlbum)

router
    .route("/album/un/:id")
    .patch(followController.unfollowAlbum);

router
     .route("/track/:id")
     .patch(followController.followTracks)

router
     .route("/track/un/:id")
     .patch(followController.unfollowTracks)

router
     .route("/artist/:id")
     .patch(followController.followArtist)

router
     .route("/artist/un/:id")
     .patch(followController.unfollowArtist)

module.exports = router;
