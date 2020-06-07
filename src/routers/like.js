const express = require('express');
const router = new express.Router();
const likeController = require(`../controllers/likeController`);

router
     .route("/likeplaylist/:id")
     .patch(likeController.likePlaylist)
 
 router
     .route("/dislikeplaylist/:id")
     .patch(likeController.dislikePlaylist)
 

module.exports = router;
