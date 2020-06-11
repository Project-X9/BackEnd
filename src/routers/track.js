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
.get(trackController.getTracksByGenresid);

router
    .route("/uploadTrack")
    /**
 * @api {patch} /uploadTrack
 * @apiGroup Tracks
 * @apiName uploadTrack 	upload new track
 * @apiDescription 
 * @apiHeader {String} Authorization (Required.)
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *          "status":"success",
 *          "data" :{
 *                  "name" : "Stay with me",
 *                  "description" : "",
 *                  "related-artists" :["2wY79sveU1sp5g7SokKOiI"],
 *                  "imageUrl" : "",
 *                  "genres"  :[322wd,46w,6yhb],
 *                  "followers"  : [
 *                                 e4blKBWovov08jWgMweryjhg7,
 *                                 Tose4blKBWov08jWgM4vSkTos,
 *                              ]
 *                  }
 *              
 *          }
 * @apiError (Error 404) 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": 
 *     }
 
 */
    .patch(trackController.addTrack);

router 
    .route("/getTrackStats/:trackid")
        /**
 * @api {get} /getTrackStats/:trackid
 * @apiGroup Tracks
 * @apiName uploadTrack 	upload new track
 * @apiDescription 
 * @apiParam {String} trackid id of track to fin stats about 
 * @apiHeader {String} Authorization (Required.)
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *          "status":"success",
 *          "data" :{
 *                  "likers" : 100,
 *                  "playcount" : 4090,
 *                 
 *                  }
 *              
 *          }
 * @apiError (Error 404) 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": 
 *     }
 
 */
    
    .get(trackController.getTrackStats);
module.exports=router;
