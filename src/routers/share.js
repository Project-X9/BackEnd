
const express = require("express");
const shareController = require(`./../controllers/shareController`);
const router = new express.Router();
const auth = require('./../middleware/auth')


/**
* @api {post} /share-track
* @apiName Share Track @apiGroup Share
* @apiVersion  0.1.0
* @apiUse HeaderAuth
* @apiSuccess (201) 
* @apiUse Error404
*/
router.route('/share-track')
.post(auth,shareController.shareTrack)
module.exports = router;