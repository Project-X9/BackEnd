
const express = require("express");
const shareController = require(`./../controllers/shareController`);
const router = new express.Router();


router.route('/share-track')
.post(shareController.shareTrack)
module.exports = router;