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
 /**
 * @api {DELETE} /artists/:id/:id1
 * @apiGroup Artists
 * @apiName deleteArtistAlbum 	delete an existing album from artist albums
 * @apiDescription 
 * @apiHeader {String} Authorization (Required.)
 * @apiParam {string} id	The Spotify ID for the artist.
 * @apiParam {string} id1 The Spotify id for the album to be deleted
 * @apiSuccessExample {JSON} Success-Response: the artist after updating his albums list
 *      HTTP/1.1 200 OK
 *          {
 *          "status":"success",
 *          "data": "{
 *                      "_id":{"$oid":"5e877b8fae42032b7c867feb"},
 *                       "name":"Artist 1",
 *                       "Bio":"Artist 1 bio",
 *                       "notifications":[{"$oid":"5e8643edd411aa54c0357fbd"},{"$oid":"5e8643edd411aa54c0357fbd"},{"_id":{"$oid":"5ee0d419fddcee383ce4c802"},"event":"follow-artist","time":{"$date":"2020-06-10T12:37:45.394Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0d569cad5ef45b8b69e74"},"event":"follow-artist","time":{"$date":"2020-06-10T12:43:21.458Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0d589cad5ef45b8b69e75"},"event":"follow-artist","time":{"$date":"2020-06-10T12:43:53.183Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0d90912b6f44344bea151"},"event":"follow-artist","time":{"$date":"2020-06-10T12:58:49.256Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0d9a13d7d1447a4682871"},"event":"follow-artist","time":{"$date":"2020-06-10T13:01:21.096Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0d9e807b48b34c0aa1298"},"event":"follow-artist","time":{"$date":"2020-06-10T13:02:31.956Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0da3cf72dd041f075130d"},"event":"follow-artist","time":{"$date":"2020-06-10T13:03:56.166Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0da5029fc473ba063fd20"},"event":"follow-artist","time":{"$date":"2020-06-10T13:04:16.387Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0da6b2cbf6b45f0aed851"},"event":"follow-artist","time":{"$date":"2020-06-10T13:04:43.436Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0da95b43d692d809a622c"},"event":"follow-artist","time":{"$date":"2020-06-10T13:05:25.036Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0db09979387329ca49930"},"event":"follow-artist","time":{"$date":"2020-06-10T13:07:21.327Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee0db9a2eb0ce09600f7828"},"event":"follow-artist","time":{"$date":"2020-06-10T13:09:46.488Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee15dd481eaa34503e88ac4"},"event":"follow-artist","time":{"$date":"2020-06-10T22:25:24.283Z"},"senderId":{"$oid":"5e8643edd411aa54c0357fbd"},"read":false},{"_id":{"$oid":"5ee24797f095e62a88c3dfdf"},"event":"follow-artist","time":{"$date":"2020-06-11T15:02:47.259Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee25c59317c1b3abc947049"},"event":"follow-artist","time":{"$date":"2020-06-11T16:31:21.783Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee25d01317c1b3abc947050"},"event":"follow-artist","time":{"$date":"2020-06-11T16:34:09.729Z"},"senderId":{"$oid":"5e89fc7eb586021c3869f63e"},"read":false},{"_id":{"$oid":"5ee25d7dc27094a968e082ce"},"event":"follow-artist","time":{"$date":"2020-06-11T16:36:13.360Z"},"senderId":{"$oid":"5ee118400155f616083b7389"},"read":false}],
 *                       "genres":[{"$oid":"5e89f67c47f4092a9080d94b"}],
 *                       "tracks":[{"$oid":"5e86459124471028e4d3539b"},{"$oid":"5e8cf0417d231c3bec30c4df"},{"$oid":"5e8cf03d7d231c3bec30c4de"},{"$oid":"5ee023770f8a9b4a70bc4d89"},{"$oid":"5ee023770f8a9b4a70bc4d89"},{"$oid":"5ee0227a0f8a9b4a70bc4d88"},{"$oid":"5ee0227a0f8a9b4a70bc4d88"}],
 *                       "image":"https://i.scdn.co/image/ee11ffb4c0f334e4c958ed051bbaf5f720751c9d",
 *                       "email":"artist1@mail.com",
 *                       "followers":[{"$oid":"5e8b7e841c56270a1b9c79fd"},{"$oid":"5e89fc7eb586021c3869f63e"},{"$oid":"5ee118400155f616083b7389"}],
 *                       "albums":[{"$oid":"5e8a52538e2b41014c9c0e57"}],
 *                       "relatedArtists":[],
 *                       "pushSubscription":{"endpoint":"https://fcm.googleapis.com/fcm/send/c8egdRL0b0A:APA91bGJJpddfa5A-8mxaE7UljC81smojFIkzImPtYyrFoMcZVegrGw0Y3Na2kDXw6l7AOz6R_4lK3ABJ0lWTnpdO-G4DUULgDmXLd_VynxlJKX74B1F17FxRz6lsI7o18PC-oRlubQc","expirationTime":null,"keys":{"p256dh":"BA993-NpWfENmcLgGn9C2SXT66CiwOrQr7BOOOHIKeTSZrQU-73qAaECGx_oTT7ENztgBifS-32e6orZZ9RGuiI","auth":"77EgGAZQggjL_g4r2dM4KA"}}}}
 * 
 * 
 *                  }"
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


// Notifications
router.route('/:id/update-push')
/**
* @api {post} /:id/update-push Updates the pushSubscription field of the Artist with the given Id
  * @apiName Update Push Subscription  @apiGroup Artists
  * @apiVersion  0.1.0
  * @apiUse HeaderAuth
 * @apiParam  {subscription} pushSubscription 
  * @apiSuccess (200) {JSON} JSON Object that contains the user after updating 'pushSubscription' field
* @apiUse Error404
*/
.post(artistController.updatePushSubscription)

router.route('/:id/delete-push')
/**
* @api {delete} /:id/delete-push Deletes the pushSubscription of the Artist with the given Id
  * @apiName Delete Push Subscription  @apiGroup Artists
  * @apiVersion  0.1.0
  * @apiUse HeaderAuth
 * @apiParam  {subscription} pushSubscription 
  * @apiSuccess (204)
* @apiUse Error404
*/
.delete(artistController.deletePushSubscription);





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
