const express = require('express');
const router = new express.Router();
const followController = require(`./../controllers/followController`);

router
    .route("/getfollowers")
    .get(followController.getAllfollowers)

router
    .route("/user/:id")
    .patch(followController.followUser)
    .delete(followController.unfollowUser)

router
    .route("/playlist/:id")
    .patch(followController.likePlaylist)
    .delete(followController.dislikePlaylist)

router
    .route("/album/:id")
    .patch(followController.likeAlbum)
    .delete(followController.dislikeAlbum);

router
     .route("/track/:id")
     .patch(followController.likeTracks)
     .delete(followController.dislikeTracks)

router
     .route("/artist/:id")
     .patch(followController.likeArtist)
     .delete(followController.dislikeArtist)

module.exports = router;
