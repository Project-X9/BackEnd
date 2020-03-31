const express = require('express');
const router = new express.Router();
const followController = require(`./../controllers/followController`);
//const categoryController = require(`./../controllers/categoryController`);

//WORKING
/*
router
    .route("/category")
    .post(categoryController.createCategory)
    .get(categoryController.getAllCategories)
router
    .route("/")
    //.delete(categoryController.deleteCategoryById)
    .get(categoryController.getCategoryById)
    //.get(categoryController.getCategoryNameById)
    //.get(categoryController.getCategoryIconById)
    //.get(categoryController.getCategoryHrefById)
    //patch(categoryController.updateCategory)*/



router
    .route("/getfollowers")
    .get(followController.getAllfollowers)

router
    .route("/user")
    .patch(followController.followUser)
    .delete(followController.unfollowUser)

router
    .route("/playlist")
    .patch(followController.likePlaylist)
    .delete(followController.dislikePlaylist)
    //.get(followController.getAllplaylist)

router
    .route("/album")
    .patch(followController.likeAlbum)
    .delete(followController.dislikeAlbum);

router
     .route("/track")
     .patch(followController.likeTracks)
     .delete(followController.dislikeTracks)

router
     .route("/artist")
     .patch(followController.likeArtist)
     .delete(followController.dislikeArtist)
     .get(followController.getAllArtists)

module.exports = router;
