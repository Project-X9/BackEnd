const express = require('express');
const artistController = require(`./../controllers/artistController`);
const router = new express.Router();


router
.route("/artists/:id")
.get(artistController.getArtist)
.delete(artistController.deleteArtist)
.patch(artistController.addArtistAlbum);


router
.route("/artists/:id/:id1")
.delete(artistController.deleteArtistAlbum)
.patch(artistController.UpdateArtistAlbum);

router
.route("/artists/:id/albums")
.get(artistController.getArtistAlbums);

router
.route("/artists/:id/related-artists")
.get(artistController.getArtistRelatedArtists);

router
.route("/artists")
.get(artistController.getArtists);

router
     .route("/getTopTracks")
     .get(artistController.getTopTracks);

router
     .route("/getTopArtists")
     /**
 * @api {GET} /getTopArtists
 * @apiGroup Artists
 * @apiName getTopArtists 	GET ALL TOP ARTISTS
 * @apiDescription 
 * @apiHeader {String} Authorization (Required.)
 * @apiUse trackOb
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *          "status":"success",
 *          "returnedArtists" :[
 *                            "234tyjnbdrtyu34re4r59i98vbhy",
 *                            "2345edfr54efde32we45rtgy67yh"
 *                            
 *                          ]        
 *          }
 * @apiError (Error 404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": 
 *     }
 
 */
     .get(artistController.getTopArtists);

router
     .route("/artists/:id/t/:trackid")
     /**
 * @api {DELETE} /artists/:id/t/:trackid
 * @apiGroup Artists
 * @apiName deleteArtistTrack 	delete an existing Track from artist tracks
 * @apiDescription 
 * @apiHeader {String} Authorization (Required.)
 * @apiParam {string} trackid	The Spotify ID for the track.
 * @apiParam {string} id The Spotify id for the artist
 * @apiUse trackOb
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *          "status":"success",
 *          
 *          }
 * @apiError (Error 404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": 
 *     }
 
 */


     .delete(artistController.deleteArtistTrack)
     .patch(artistController.updateArtistTrack);
router 

     .route("/artists/:id/addTrack/:trackid")
/**
 * @api {patch} /artists/:id/addTrack/:trackid
 * @apiGroup Artists
 * @apiName addArtistTrack 	Add an existing Track to artist tracks
 * @apiDescription 
 * @apiHeader {String} Authorization (Required.)
 * @apiParam {string} trackid	The Spotify ID for the track.
 * @apiParam {string} id The Spotify id for the artist
 * @apiUse trackOb
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
 * @apiError (Error 404) NotFound The id of the Track was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": 
 *     }
 
 */
     .patch(artistController.addArtistTrack);

router.route('/:id/update-push')
.post(artistController.updatePushSubscription)


router 
     .route ("/addArtist/:id")
     /**
 * @api {PATCH} /addArtist/:id
 * @apiGroup Artists
 * @apiName addArtist Add Artist by user id
 * @apiDescription 
 * @apiHeader {String} Authorization (Required.)
 * @apiParam {String } user Id
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *          {
 *          "status":"success",
 *         "data" : {
 *             "followers": [
 *                            "2345yhbnjyt543456yhnjuyr" 
 *                          ],
 *             "playlists" : [],
 *            "email": "abdallah@gmail.com",
 *            "name" : "Abdallah George",
 *            "premium" : true,
 *            "isArtist" :true
 * 
 *         
 *          }
 * @apiError (Error 404) NotFound
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": 
 *     }
 * 
 * 
 
 */
     .patch(artistController.addArtist);

module.exports=router;
