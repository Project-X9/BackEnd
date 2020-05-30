const express = require('express');
const trackController = require(`./../controllers/trackController`);
const router = new express.Router();

router
.route("/")
.get(trackController.getTracks);


router
.route("/:id")
.get(trackController.getTrack)
.delete(trackController.deleteTrack);


router
.route("/getTracksByGenresid/:id")
.get(trackController.getTracksByGenresid)

module.exports=router;
