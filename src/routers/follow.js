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
    .patch(followController.likePlaylist)

router
    .route("/playlist/un/:id")
    .patch(followController.dislikePlaylist)

router
    .route("/album/:id")
    .patch(followController.likeAlbum)

router
    .route("/album/un/:id")
    .patch(followController.dislikeAlbum);

router
     .route("/track/:id")
     .patch(followController.likeTracks)

router
     .route("/track/un/:id")
     .patch(followController.dislikeTracks)

router
     .route("/artist/:id")
     .patch(followController.likeArtist)

router
     .route("/artist/un/:id")
     .patch(followController.dislikeArtist)

module.exports = router;
