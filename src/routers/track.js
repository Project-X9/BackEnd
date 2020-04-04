const express = require('express');
const trackController = require(`./../controllers/trackController`);
const router = new express.Router();

router
.route("/tracks")
.get(trackController.getTracks);


router
.route("/tracks/:id")
.get(trackController.getTrack)
.delete(trackController.deleteTrack);


module.exports=router;
